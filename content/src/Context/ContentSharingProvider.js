import React, { createContext, useContext, useState } from "react";

const ContentContext = createContext();

export const AppcontentProvider = ({ children }) => {
  const [userId, setUserId] = useState("userIduserId");
  const [transcript, setTranscript] = useState([]);
  const [defaultTranscript, setDefaultTranscript] = useState("");
  const [selectedLangTranscript, setSelectedLangTranscript] = useState("");
  const [allowedLanguage, setAllowedLanguage] = useState([
    { code: "en", language: "English", audioCode: "en-US" },
    { code: "es", language: "Spanish", audioCode: "es-ES" },
    { code: "ja", language: "Japanese", audioCode: "ja-JP" },
    { code: "bn", language: "Bengali", audioCode: "bn-IN" },
    { code: "hi", language: "Hindi", audioCode: "hi-IN" },
    { code: "pt", language: "Portuguese", audioCode: "pt-PT" },
    { code: "ru", language: "Russian", audioCode: "ru-RU" },
    { code: "tr", language: "Turkish", audioCode: "tr-TR" },
    { code: "vi", language: "Vietnamese", audioCode: "vi-VN" },
    { code: "zh", language: "Chinese - Simplified", audioCode: "zh-CN" },
    { code: "zh-Hant", language: "Chinese - Traditional", audioCode: "zh-TW" },
    // { code: "ar", language: "Arabic" },
    // { code: "de", language: "German" },
    // { code: "fr", language: "French" },
    // { code: "it", language: "Italian" },
    // { code: "ko", language: "Korean" },
    // { code: "nl", language: "Dutch" },
    // { code: "pl", language: "Polish" },
    // { code: "th", language: "Thai" },
    // { code: "bg", language: "Bulgarian" },
    // { code: "cs", language: "Czech" },
    // { code: "da", language: "Danish" },
    // { code: "el", language: "Greek" },
    // { code: "fi", language: "Finnish" },
    // { code: "hr", language: "Croatian" },
    // { code: "hu", language: "Hungarian" },
    // { code: "id", language: "Indonesian" },
    // { code: "iw", language: "Hebrew" },
    // { code: "lt", language: "Lithuanian" },
    // { code: "no", language: "Norwegian" },
  ]);
  const [translatedTranscripts, setTranslatedTranscripts] = useState({});
  const [targetCaptionDiv, setTargetCaptionDiv] = useState(null);
  const [sumarryData, setSumarryData] =useState([])

  const contextValue = {
    userId,
    setUserId,
    transcript,
    setTranscript,
    selectedLangTranscript,
    setSelectedLangTranscript,
    allowedLanguage,
    setAllowedLanguage,
    defaultTranscript,
    setDefaultTranscript,
    translatedTranscripts,
    setTranslatedTranscripts,
    targetCaptionDiv,
    setTargetCaptionDiv,

    sumarryData,
    setSumarryData,
  };

  return (
    <ContentContext.Provider value={contextValue}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContentSharing = () => {
  return useContext(ContentContext);
};
