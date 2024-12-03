



chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const { status } = changeInfo;
    if (status === "complete" && tab.url.includes("youtube.com") && tab.url.includes("watch?v")) {
        chrome.tabs.sendMessage(tabId, { YtUpdate: "updated" });
    }
});
