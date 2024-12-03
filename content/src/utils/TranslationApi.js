/* global translation */



export const TranslationApi = async (transcript, sourceLang, targetLang,setTranscriptData) => {

    if (sourceLang === targetLang) {
      return transcript;
    }
  
    const languagePair = { sourceLanguage: sourceLang, targetLanguage: targetLang };
  
    const canTranslate = await translation.canTranslate(languagePair);
    if (canTranslate === "no") {
      return transcript; 
    }
  
    try {
      const translator = await translation.createTranslator(languagePair);
      let transcriptArr=[]

      const translatedTranscript = await Promise.all(
        transcript.map(async (item) => {
       
          const translatedText = await translator.translate(item.text);

          let obj={
            text:translatedText,
            start:item.start,
            end:item.end,
            lang:targetLang
          }

          transcriptArr.push(obj)
          setTranscriptData([...transcriptArr])

          return { ...item, text: translatedText };
        })
      );
      return translatedTranscript;
    } catch (error) {
      console.error("Translation error:", error);
      return transcript;
    }
  };
  
