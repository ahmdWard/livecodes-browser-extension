function addLiveCodeButtons() {
  const codeElements = document.querySelectorAll("pre, pre code");
  codeElements.forEach(codeElement => {
    const preBlock = codeElement.tagName.toLowerCase() === "pre" ? codeElement : codeElement.closest("pre");
    if (!preBlock || preBlock.hasAttribute("data-livecode-processed")) return;

    preBlock.setAttribute("data-livecode-processed", "true");

    const button = document.createElement("button");
    button.textContent = "Open in LiveCodes";
    button.className = "livecode-button";
    preBlock.insertAdjacentElement("afterend", button);

    button.addEventListener("click", async () => {
      const codeNode = preBlock.querySelector("code") || preBlock;
      const code = codeNode.textContent.trim();
      const language = await detectLanguage(codeNode, preBlock, code);
      console.log("=== CODE START ===\n", code, "\n=== CODE END ===");
      console.log("Language:", language);
    });
  });
}


async function autoDetectLanguage(code) {
  if (self.hljs?.highlightAuto) {
    const res = hljs.highlightAuto(code);
    return res.language || "javascript";
  }
  return "javascript"; 
}


async function detectLanguage(codeElement, preElement, code) {
  const allClasses = [
    ...Array.from(codeElement.classList),
    ...Array.from(preElement.classList),
  ];

  let languageClass = allClasses.find(c => c.startsWith("language-"));

  if (languageClass) {
    return languageClass.replace("language-", "");
  }
    return await autoDetectLanguage(code);

}


addLiveCodeButtons();
const contentObserver = new MutationObserver(function(changes) {
  let shouldCheckForNewCode = false;
  changes.forEach(change => {
    change.addedNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        shouldCheckForNewCode = true;
      }
    });
  });
  if (shouldCheckForNewCode) {
    addLiveCodeButtons();
  }
});
contentObserver.observe(document.body, {
  childList: true,
  subtree: true
});