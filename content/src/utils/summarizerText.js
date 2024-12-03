/* global ai */


export const summarizerText = async (text) => {

  try {
    const canSummarize = await ai.summarizer.capabilities();

    if (canSummarize && canSummarize.available !== "no") {
      let summarizer;

      if (canSummarize.available === "readily") {
        // The summarizer is immediately available
        summarizer = await ai.summarizer.create();
      } else {
        // The summarizer requires a model download
        summarizer = await ai.summarizer.create();
        summarizer.addEventListener("downloadprogress", (e) => {
        });
        await summarizer.ready; 
      }

     
      const summary = await summarizer.summarize(text);
      summarizer.destroy();

      return summary; 
    } else {
  
      return "Summarizer is not available.";
    }
  } catch (error) {
    return "An error occurred during summarization.";
  }
};
