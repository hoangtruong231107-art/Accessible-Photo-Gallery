# WED201c — Interactive Photo Gallery

An interactive gallery demonstrating DOM updates, mouse events, keyboard focus, and accessibility basics.

## Files
- `index.html`: six photos with alt text and event listeners.
- `style.css`: responsive layout and visible keyboard-focus styling.
- `script.js`: `upDate()`, `undo()`, and `addTabindex()`.

## Features
- `onmouseover` and `onmouseleave` support mouse interaction.
- `onfocus` and `onblur` support keyboard focus.
- `onload="addTabindex()"` calls the function after the page loads.
- `addTabindex()` logs to the console, loops over gallery images, and sets `tabindex="0"`.
- All six photos have descriptive `alt` attributes.

## Test
1. Open `index.html` in a browser (Internet is needed for the remote photos).
2. Hover over each image, then move the mouse away.
3. Press Tab to focus each image and verify the preview updates.
4. Open browser developer tools → Console to check the log messages.

## Validation before submission
Run the published URL through:
- W3C Markup Validator: https://validator.w3.org/
- WAVE: https://wave.webaim.org/
- axe DevTools browser extension: https://www.deque.com/axe/

These checks should be run after publishing. No validator results are claimed in advance.

## Publish with GitHub Pages
1. Create a public repository.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Go to Settings → Pages.
4. Choose Deploy from a branch, branch `main`, folder `/(root)`, and Save.
5. Wait for deployment, open the published URL, then run the validators above.
