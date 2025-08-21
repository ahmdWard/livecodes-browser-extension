chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "Edit in livecodes",
    title: "Open in LiveCodes",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== "open-livecodes") return;

  const pageUrl = info.pageUrl || tab?.url || "";
  const liveCodeUrl = buildLiveCodesUrl(pageUrl);

-  chrome.tabs.create({ url: liveCodeUrl });
});

function buildLiveCodesUrl(url) {
  return `https://livecodes.io/?x=${encodeURIComponent(url)}`;
}
