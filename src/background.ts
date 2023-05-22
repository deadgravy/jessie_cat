if (chrome.action) {
    chrome.action.onClicked.addListener((tab) => {
        chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
    });
} else if (chrome.browserAction) {
    chrome.browserAction.onClicked.addListener((tab) => {
        chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
    });
}


export { }
