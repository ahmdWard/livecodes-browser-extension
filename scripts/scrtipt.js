function addLiveCodeButtons() {
  const codeElements = document.querySelectorAll("pre code");
  
  codeElements.forEach(codeElement => {
    const preBlock = codeElement.closest("pre");
    
    if (!preBlock || preBlock.hasAttribute('data-livecode-processed')) {
      return;
    }
    
    preBlock.setAttribute('data-livecode-processed', 'true');
    
    const button = document.createElement("button");
    button.textContent = "Open in LiveCodes";
    button.className = "livecode-button";
    
    preBlock.insertAdjacentElement("afterend", button);
    
    button.addEventListener("click", function() {
      const code = codeElement.textContent.trim();
      
      let language = detectLanguage(codeElement, preBlock);
      
      console.log("Found code:");
      console.log(code);
      console.log("Language:", language);
    });
  });
}

function detectLanguage(codeElement, preElement) {
  const codeClasses = Array.from(codeElement.classList);
  let languageClass = codeClasses.find(className => className.startsWith("language-"));
  
  if (!languageClass) {
    const preClasses = Array.from(preElement.classList);
    languageClass = preClasses.find(className => className.startsWith("language-"));
  }
  
  if (languageClass) {
    return languageClass.replace("language-", "");
  }
  
  return "javascript"; 
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