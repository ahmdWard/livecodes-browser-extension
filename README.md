## LiveCodes Extension (Chrome)

A Chrome extension for [LiveCodes](https://livecodes.io/)that lets you instantly open any code you select on a webpage in a LiveCodes playground. Highlight code snippets anywhere, right-click, and launch them directly into LiveCodes to run, edit, and experiment interactively.

### Features

- Context menu integration – right-click on selected code to open it in LiveCodes.

- Instant playground – opens a new LiveCodes tab with your code preloaded.

- Basic language detection – detects HTML, CSS, or JS and opens the appropriate editor panel.

- Fallback snippet – if no text is selected, opens with a default code snippet.

### Installation (Development Mode)

Clone this repo:
```bash
git clone https://github.com/ahmdWard/livecodes-extension.git
cd livecodes-extension

```
1. Open Chrome and go to chrome://extensions/.

2. Enable Developer mode (toggle in the top right).

3. Click Load unpacked and select the project folder.

4. You should now see “Open in LiveCodes” in your right-click menu.

### Usage

- Highlight any code snippet on a webpage.
- Right-click ----> Open in LiveCodes.
- A new tab will open at livecodes.io