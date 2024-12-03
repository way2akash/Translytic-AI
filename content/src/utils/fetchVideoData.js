import { transcriptFetch } from "./transcriptFetch";


export const fetchVideoData = (videoId, setTranscript, setDefaultTranscript) => {
    fetch(`https://www.youtube.com/watch${videoId}`)
      .then((response) => response.text())
      .then((data) => {
        let objStartPoint = data.indexOf('"captionTracks":')
        let objEndPoint = data.indexOf("]", objStartPoint)
        let output = data.slice(objStartPoint + 16, objEndPoint + 1)



        let parsedOutput;
        try {
          parsedOutput = JSON.parse(output);
          let flagg = false;
          for (let i = 0; i < parsedOutput.length; i++) {
            if (parsedOutput[i].languageCode === "en") {
              setDefaultTranscript(parsedOutput[i].languageCode);
              flagg = true;

              
              transcriptFetch(parsedOutput[i].baseUrl, setTranscript, parsedOutput[i].languageCode);
              break;
            }
          }
          if (!flagg) {

            setDefaultTranscript(parsedOutput[0].languageCode)
            transcriptFetch(parsedOutput[0].baseUrl, setTranscript,parsedOutput[0].languageCode);
          }
        } catch (err) {
          console.error("Error parsing caption tracks:", err);
        }
      });
  };