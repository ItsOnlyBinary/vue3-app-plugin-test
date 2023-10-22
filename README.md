# Vue3 App Plugin Test


## How to run

Open a terminal for each directory and in each terminal run:

```bash
yarn && yarn dev
```

This will start two webpack-dev-server instances.

Navigate your web browser to `http://localhost:8390/`

***note:** for the vue2 version the port is `8490`*


## Description of the issue

Components compiled into separate bundles cannot be used by the main app bundle due to the way `currentRenderingInstance` is tracked.

The `resolveComponent` & `currentRenderingInstance` code is included in the app-plugin bundle meaning it cannot resolve child components even when the component is used as a child in the main app.

If you inspect the DOM you should be able to see `<global-text>` and `<imported-text>` not getting replaced. Even the `imported-text` component that is defined in `components: {}` does not get replaced.


## Possible solutions

I don't ~~fully~~ understand how it currently works and if any of the below would even be possible with its current structure.

* vue code should only be included in the bundle if it imports `createApp`. (eg `runtime-core`, `reactivity`, etc)

* `currentRenderingInstance` is passed into the render function of the component so it can be obtained from the parent component.


## Reasons for wanting this behavior

In the Vue2 version of our app we used commonjs bundling and some build time magic to allow plugins to require and/or replace existing Vue components within the app. This allows us to have a very powerful plugin system that did not require rebuilding of the app.

Currently with Vue3 this only seems to work with more simple plugins that do not use app global defined components, child components or named slots.
