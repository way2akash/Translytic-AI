// export const getAudioCode = (languageCode,allowedLanguage) => {
//     const language = allowedLanguage.find(lang => lang.code === languageCode);
//     if (language) {
//         return language.audioCode; 
//     }
//     return "en-US"; 
// };



export const getAudioCode = (languageCode, allowedLanguage, selectedLangTranscript) => {
    const languageByName = allowedLanguage.find(lang => lang.name === selectedLangTranscript);
    if (languageByName) {
        return languageByName.audioCode; 
    }

    const languageByCode = allowedLanguage.find(lang => lang.code === languageCode);
    if (languageByCode) {
        return languageByCode.audioCode; 
    }

    return "en-US"; 
};
