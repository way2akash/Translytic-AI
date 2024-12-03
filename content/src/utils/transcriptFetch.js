/* global translation */




export const transcriptFetch = (url, setTranscript, langCode) => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        // translationApi(doc, langCode)

        const texts = doc.querySelectorAll("transcript text");
        let transcriptArr=[]
        texts.forEach((item) => {
          let obj={
            text: item.innerText,
            start:Number(item.getAttribute("start")),
            end:Number(item.getAttribute("dur")),
            lang:langCode
          }
          transcriptArr.push(obj)
        });
        setTranscript(transcriptArr)
     
      });
  };