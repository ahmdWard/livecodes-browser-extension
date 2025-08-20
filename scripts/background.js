chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "open-livecodes",
    title: "Open in LiveCodes",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  try {
    const [{ result: selectedText = "" }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => (window.getSelection()?.toString() || "")
    });

    const code = (selectedText || "").trim() || 'console.log("Hello from fallback")';
    const lang = guessLang(code);
    const url = buildLiveCodesUrl({ code, lang });

    chrome.tabs.create({ url });
  } catch (error) {
    const url = buildLiveCodesUrl({
      code: 'console.log("Fallback error")',
      lang: "js",
    });
    chrome.tabs.create({ url });
  }
});

function guessLang(code)  {
  const t = (code || "").trim();
  if (t.startsWith("<")) return "html";

  const head = t.slice(0, 70);
  const looksCss = /\{[^}]*:[^}]*;/m.test(head);
  if (looksCss) return "css";

  return "js";
}

function buildLiveCodesUrl({ code, lang }) {
  const params = new URLSearchParams();
  params.set("screen", "editor");

    if (lang === "html") params.set("html", code);
    else if (lang === "css") params.set("css", code);
    else params.set("js", code);
  

  return `https://livecodes.io/?${params.toString()}`;
}
