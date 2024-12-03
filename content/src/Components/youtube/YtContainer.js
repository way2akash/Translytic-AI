

/* global chrome */

import { useEffect } from "react";
import ReactDOM from "react-dom/client";

import { YtMainContainer } from "../../Style/AppContentStyle";
import YtInner from "./YtInner";
import { AppcontentProvider } from "../../Context/ContentSharingProvider";

export const YtContainer = () => {
  useEffect(() => {
    const messageHandler = (message) => {
      if (message.YtUpdate === "updated") {

        const intervalId = setInterval(() => {
          const targetElement = document.querySelector("#columns #secondary");
          if (targetElement) {

            if (!document.getElementById("yt-ai-container")) {
              const container = document.createElement("div");
              container.id = "yt-ai-container";

              targetElement.prepend(container);

              const root = ReactDOM.createRoot(container);
              root.render(
                <AppcontentProvider>
                  <YtMainContainer>
                    <YtInner />
                  </YtMainContainer>
                </AppcontentProvider>
              );
            }

            clearInterval(intervalId);
          }
        }, 500);
      }
    };

    chrome.runtime.onMessage.addListener(messageHandler);

    return () => {
      chrome.runtime.onMessage.removeListener(messageHandler);
    };
  }, []);

  return null; 
};

export default YtContainer;
