/* global chrome */
import React, { useState, useEffect, useRef } from "react";

import {
  FooterSection,
  HeaderSelection,
  Transbox,
  TransOption,
  TrnscSelectionMenu,
  YtContentBody,
  YtHeader,
  YtinnerContainer,
  YtSummarySection,
  YtSummaryWrap,
  YtTitle,
  YtTranscriptSection,
  YtTransWrap,
} from "../../Style/AppContentStyle";
import { fetchVideoData } from "../../utils/fetchVideoData";
import { useContentSharing } from "../../Context/ContentSharingProvider";
import TranscriptBox from "./TranscriptBox";
import { TranslationApi } from "../../utils/TranslationApi";
import { getAudioCode } from "../../utils/getAudioCode";
import SummarySection from "./SummarySection";
import { summarizerText } from "../../utils/summarizerText";
import { processSummaries } from "../../utils/processSumaries";

const YtInner = () => {
  const {
    transcript,
    setTranscript,
    setSelectedLangTranscript,
    selectedLangTranscript,
    setDefaultTranscript,
    defaultTranscript,
    allowedLanguage,
    translatedTranscripts,
    setTranslatedTranscripts,
    targetCaptionDiv,
    setTargetCaptionDiv,
    sumarryData,
    setSumarryData,
  } = useContentSharing();

  const [showBody, setShowBody] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [transcriptData, setTranscriptData] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [video, setVideo] = useState(0);
  const [synth] = useState(window.speechSynthesis);
  const [selectdHeader, setSelectdHeader] = useState("transcript");
  const [isCaptionVisible, setIsCaptionVisible] = useState(true);
  const [isSpeakEnabled, setIsSpeakEnabled] = useState(false);

  const oldText = useRef("");
  let logo = chrome.runtime.getURL("./images/Icon32.png");
  let speakIcon = chrome.runtime.getURL("./images/talking.png");
  let captionIcon = chrome.runtime.getURL("./images/caption.png");
  let downIcon = chrome.runtime.getURL("./images/down.png");

  useEffect(() => {
    let id = window.location.search;
    setVideoId(id);
    TargetCaptionFn();
  }, []);

  const TargetCaptionFn = () => {
    let targetElem = document.querySelector(".ytp-caption-window-container");
    if (targetElem) {
      setTargetCaptionDiv(targetElem);
    } else {
      setTimeout(() => {
        TargetCaptionFn();
      }, 300);
    }
  };



  useEffect(() => {
    if (targetCaptionDiv) {
      let transcriptDiv = document.querySelector("#translated-transcript");
      if (!transcriptDiv) {
        transcriptDiv = document.createElement("div");
        transcriptDiv.id = "translated-transcript";

        targetCaptionDiv.appendChild(transcriptDiv);
      }

      let vid = document.querySelector("video");
      if (vid) {
        setVideo(vid);
      }

      // Style the transcript div
      transcriptDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      transcriptDiv.style.color = "#fff";
      transcriptDiv.style.padding = "5px 10px";
      transcriptDiv.style.borderRadius = "4px";
      transcriptDiv.style.fontSize = "16px";
      transcriptDiv.style.textAlign = "center";
      transcriptDiv.style.marginTop = "5px";
      transcriptDiv.style.maxWidth = "90%";
      transcriptDiv.style.bottom = "10%";
      transcriptDiv.style.left = "50%"; 
      transcriptDiv.style.transform = "translateX(-50%)"; 
      transcriptDiv.style.wordWrap = "break-word";
      transcriptDiv.style.whiteSpace = "pre-wrap";
      transcriptDiv.style.zIndex = "10000";
      transcriptDiv.style.position = "absolute";
    } else {
      TargetCaptionFn();
    }
  }, [targetCaptionDiv]);

  useEffect(() => {
    if (video) {
      video.addEventListener("timeupdate", () => {
        setCurrentTime(video.currentTime);
      });
    }
  }, [video]);




  useEffect(() => {
    const currentCaption = transcriptData.find(
      (item) => currentTime <= item.start && currentTime >= item.end
    );

    if (currentCaption) {
  
      speakCaption(
        currentCaption.text,
        currentCaption.end - currentCaption.start,
        currentCaption.lang
      );
      let captionDiv = document.querySelector("#translated-transcript");
      if (captionDiv) {
        captionDiv.innerText = currentCaption.text;
      }
    }
  }, [currentTime, transcriptData]);

  let speakingTimeout;
  const speakCaption = async (text, duration, lang) => {

    if (oldText.current === text || !isSpeakEnabled) {
      return;
    }
    oldText.current = text;

    if (speakingTimeout) {
      clearTimeout(speakingTimeout);
    }

    if (synth.speaking) {
      synth.cancel();
    }

    const safeDuration = Math.max(duration.toFixed(2), 0.8);

    let rate = Math.min((text.length / safeDuration) * 0.5 + 1, 3); 
    rate = isFinite(rate) ? rate : 1; 

    const utterance = new SpeechSynthesisUtterance(text);
    let AudioLanguage = await getAudioCode(lang, allowedLanguage,selectedLangTranscript);
    utterance.lang = AudioLanguage;
    utterance.rate = rate;
    utterance.volume = 1;



    speakingTimeout = setTimeout(() => {
      synth.speak(utterance);
    }, 100);
  };



  useEffect(() => {
    setTranscriptData(transcript);

    const processTranscript = async () => {
      if (!transcript || !Array.isArray(transcript)) return;

      const allText = transcript.map((item) => item.text).join(" ");

      const chunkSize = 3500;
      const chunks = [];
      for (let i = 0; i < allText.length; i += chunkSize) {
        const chunk = allText.slice(i, i + chunkSize);
        chunks.push(chunk);
      }

      for (const chunk of chunks) {
        try {
          const summary = await summarizerText(chunk);
          const pointsArray = processSummaries(summary);

          setSumarryData((prev) => [...prev, ...pointsArray]);

        } catch (error) {
          console.error("Error processing chunk:", error);
        }
      }
    };

    processTranscript();
  }, [transcript]);

  useEffect(() => {
    if (videoId) {
      fetchVideoData(videoId, setTranscript, setDefaultTranscript);
    }
  }, [videoId]);

  const handleLanguageSelect = async (language) => {

    if (language.language === selectedLangTranscript) {
      setShowLanguageMenu(false);
      return;
    }

    const sourceLang = defaultTranscript ;
    const targetLang = language.code;

    if (translatedTranscripts[targetLang]) {
      setTranscriptData(translatedTranscripts[targetLang]);
    } else {
      const translatedData = await TranslationApi(
        transcript,
        sourceLang,
        targetLang,
        setTranscriptData
      );
      setTranslatedTranscripts((prev) => ({
        ...prev,
        [targetLang]: translatedData,
      }));
      setTranscriptData(translatedData);
    }

    setSelectedLangTranscript(language.language);
    setShowLanguageMenu(false);
  };

  useEffect(() => {
    let ccBox = document.getElementById("translated-transcript");
    if (ccBox) {
      ccBox.style.visibility = isCaptionVisible ? "visible" : "hidden";
    }
  }, [isCaptionVisible]);

  useEffect(() => {
    if (isSpeakEnabled) {
      let vid = document.querySelector("video");
      if (vid) {
        vid.muted = true;
      }
    }
  }, [isSpeakEnabled]);
  return (
    <YtinnerContainer>
      <YtTitle onClick={() => setShowBody(!showBody)}>
        <img src={logo} />
        Translytic AI
        <img
          id="dropDown"
          style={{ rotate: showBody ? "180deg" : "0deg" }}
          src={downIcon}
        />
      </YtTitle>
      {showBody && (
        <YtContentBody>
          <YtHeader>
            <HeaderSelection
              style={{
                backgroundColor:
                  selectdHeader === "transcript" ? "#290268" : "#7723ff",
              }}
              onClick={() => setSelectdHeader("transcript")}
            >
              Transcript
            </HeaderSelection>
            <HeaderSelection
              style={{
                backgroundColor:
                  selectdHeader === "summary" ? "#290268" : "#7723ff",
              }}
              onClick={() => setSelectdHeader("summary")}
            >
              Summary
            </HeaderSelection>
          </YtHeader>

          {selectdHeader === "transcript" ? (
            <YtTransWrap>
              <TrnscSelectionMenu
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                val={showLanguageMenu}
              >
                {showLanguageMenu ? (
                  <Transbox
                    style={{
                      maxHeight: "200px",
                      overflowY: "auto",
                    }}
                  >
                    {allowedLanguage.map((lang) => (
                      <TransOption
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang)}
                        style={{
                          backgroundColor:
                            selectedLangTranscript === lang.language
                              ? "#81188d"
                              : "#b656c1",
                        }}
                      >
                        {lang.language}
                      </TransOption>
                    ))}
                  </Transbox>
                ) : selectedLangTranscript ? (
                  selectedLangTranscript
                ) : (
                  "Select Language"
                )}
              </TrnscSelectionMenu>
              <YtTranscriptSection>
                {transcriptData.map((item, index) => (
                  <TranscriptBox data={item} key={index} />
                ))}
              </YtTranscriptSection>
              <FooterSection>
                <div id="fo-cap">
                  <img src={captionIcon} />
                  <input
                    type="checkbox"
                    defaultChecked={isCaptionVisible}
                    onClick={() => setIsCaptionVisible(!isCaptionVisible)}
                  />
                  Caption
                </div>
                <div id="fo-spk">
                  <img src={speakIcon} />
                  <input
                    type="checkbox"
                    defaultChecked={isSpeakEnabled}
                    onClick={() => setIsSpeakEnabled(!isSpeakEnabled)}
                  />
                  Speak
                </div>
              </FooterSection>
            </YtTransWrap>
          ) : (
            <YtSummaryWrap>
              <YtSummarySection>
                <SummarySection />
              </YtSummarySection>
            </YtSummaryWrap>
          )}
        </YtContentBody>
      )}

    </YtinnerContainer>
  );
};

export default YtInner;
