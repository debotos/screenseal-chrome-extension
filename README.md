## Installation

```
git clone https://github.com/satendra02/react-chrome-extension.git
```

Go to `react-chrome-extension` directory run

```
yarn install
```

Now build the extension using

```
yarn build
```

You will see a `build` folder generated inside `[PROJECT_HOME]` & Inside `[PROJECT_HOME]\src` corresponding .css file of .scss file. Modify only the .scss file(if needed) and .css file will be auto generated.

## Adding React app extension to Chrome

In Chrome browser, go to chrome://extensions page and switch on developer mode. This enables the ability to locally install a Chrome extension.

Now click on the `LOAD UNPACKED` and browse to `[PROJECT_HOME]\build` ,This will install the React app as a Chrome extension.

When you go to any website and click on extension icon, injected page will toggle.
