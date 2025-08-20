chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "test-alert",
    title: "Test Alert",    
    contexts: ["all"] 
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId !== "test-alert") return;

try {
    const [{ result: selectedText }] = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => window.getSelection()?.toString() ||""
  });

    const code = selectedText.trim() || 'console.log("Hello from fallback")';
    const url =
      "https://livecodes.io/?screen=editor&htmlll=" + encodeURIComponent(code);

  chrome.tabs.create({ url });
} catch (error) {
    const url = "https://livecodes.io/?screen=editor&js=" + encodeURIComponent('console.log("Fallback error")');
    chrome.tabs.create({ url });
}
  
});
