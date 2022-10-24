# Casper Signer

The Casper Signer is a browser plugin used to sign transactions for the Casper Network.

You can find the latest version on the [Chrome Web Store](https://chrome.google.com/webstore/detail/casperlabs-signer/djhndpllfiibmcdbnmaaahkhchcoijce). For help and usage tips, check out the [Casper Signer User Guide](https://casper.network/docs/workflow/signer-guide).

**Note:** The Casper Signer supports Google Chrome and Chromium-based browsers like Brave. We recommend using the latest available browser versions.

### Prerequisites

First, you need to install `npm`, which will help you set up all the dependencies.

```bash

npm install

```

### Building the Casper Signer

The next command builds the Casper Signer and outputs the bundle files to the `build` directory. This command will also help you rebuild the code of the user interface; however, you need to reopen or refresh the Singer pop-up window to see the changes take effect.

```bash

npm run watch

```

### Running the Scripts

The following command builds the background, content, and inject scrips in *watch* mode. When using this command, you have to reload the extension on Chrome's extension manager page.

```bash

npm run scripts_watch

```

### Building and Publishing

To build and publish your changes, run the following command. You will find the built package in the `artifacts` directory.

```bash

npm run complete

```

