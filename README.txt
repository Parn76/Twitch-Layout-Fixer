# Twitch Layout Fixer

## Description
Twitch Layout Fixer is a browser extension that customizes the layout of Twitch. Specifically, it moves the stream info section below the video player for a cleaner and more organized layout.
Testet only in Chrome

## Features
- Moves the "Stream Info" section below the video player.
- Ensures the styling of the moved element is preserved.
- Supports navigation and page transitions within Twitch.

## Installation

1. **Download or Clone the Project:**
   - Download the files or clone the repository to your local machine.

2. **Adjust Browser Settings:**
   - In Chrome, navigate to `chrome://extensions/`.
   - Enable Developer Mode in the top right corner.
   - Click "Load unpacked extension" and select the folder containing the `manifest.json` file.

3. **Usage:**
   - Visit a Twitch page. The extension will automatically activate and adjust the layout.

## Files

### `content.js`
The main script of the extension. It:
- Locates the relevant Twitch elements ("Stream Info" and the target area).
- Moves the "Stream Info" section below the video player.
- Adjusts the styling of the moved element.

### `manifest.json`
Defines the metadata of the extension, including:
- Permissions (active on Twitch pages).
- Linking scripts and styles to the extension.

### `styles.css`
Contains additional CSS rules to enhance the layout if needed.
- Modifies the order of elements.
- Adds spacing and Flexbox adjustments.

## How It Works

1. **Initialization:**
   - The script is executed on Twitch pages as specified in `manifest.json`.
   - It periodically checks if the target elements are present on the page.

2. **Layout Adjustment:**
   - Once the "Stream Info" and target elements are identified, the "Stream Info" section is moved.
   - The original styling is preserved and adjusted to account for spacing.

3. **Support for Navigation Changes:**
   - An event listener on `visibilitychange` ensures the script is re-executed when navigating within Twitch.

## Customization
If you want to customize the extension:

- **Selectors:**
  - Adjust the selectors in `content.js` if Twitch changes its class names.
- **Styling:**
  - Modify the spacing or layout in `styles.css`.

## Limitations
- Works only on Twitch pages (e.g., `*.twitch.tv`).
- May not be compatible with other Twitch layout extensions.

## Support
If you encounter issues or need adjustments, open an issue in the repository or contact the developer.

## License
This project is licensed under the MIT License. See `LICENSE` for details.

