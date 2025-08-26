## LiveCodes Extension (Chrome)

A Chrome extension for [LiveCodes](https://livecodes.io/), Bring any code example to life with a single click. This extension automatically detects code blocks on web pages and adds an “Open in LiveCodes” button below them, letting you launch fully interactive playgrounds without copy-pasting. You can also right click anywhere on a page and choose “Edit in LiveCodes” to send the entire page into  the[LiveCodes](https://livecodes.io/)

### Features

- **Context menu integration** – Edit the pages in Lives Code website (suitable with **gitHub**)

- **Instant playground** 
– opens a new LiveCodes tab with your code preloaded, powered by the [LiveCodes SDK](https://github.com/live-codes/livecodes), which handles embedding and configuration under the hood and  for instant testing and exploration

- **Smart language detection**
 –icks up classes like language-js, language-html, etc.

 -Falls back to hljs.highlightAuto(code) when Highlight.js is present.

 -Defaults to javascript if unknown.

### Installation (Development Mode)

Clone this repo:
```bash
git clone https://github.com/ahmdWard/livecodes-browser-extension.git
cd livecodes-extension

```
1. Open Chrome and go to chrome://extensions/.

2. Enable Developer mode (toggle in the top right).

3. Click Load unpacked and select the project folder.

4. You should now see **Edit in LiveCodes** in your right click menu and a **open in live codes** .

### Usage

- Right-click ----> Edit in LiveCodes.
- A new tab will open at livecodes.io
