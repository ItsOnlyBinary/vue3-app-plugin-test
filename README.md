# Vue3 App Plugin Test


## How to run

Open a terminal for each directory and in each terminal run:

```bash
yarn && yarn dev
```

This will start two webpack-dev-server instances.

Navigate your web browser to `http://localhost:8390/`


## Description of the issue

As you can hopefully see, the global-text component cannot be used from the plugin, even if its directly added into the components object.

If you inspect the DOM you should be able to see `<global-text>` and `<imported-text>` not getting replaced.


## Reasons for wanting this behaviour

In the Vue2 version of our app we used commonjs bundling and some build time magic to allow plugins to require and/or replace existing Vue components within the app. This allows us to have a very powerful plugin system that did not require rebuilding of the app.

Currently with Vue3 this only seems to work with more simple plugins that do not use app global defined components or named slots.
