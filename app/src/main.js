import { createApp } from 'vue';

import App from '@/components/App';
import GlobalText from '@/components/GlobalText';

window.api = {
    plugin: null,
    registerPlugin: (pluginComponent) => {
        window.api.plugin = pluginComponent;
    },
    GlobalText,
};

const loadPlugins = () => new Promise((resolve, reject) => {
    const scr = document.createElement('script');
    scr.onerror = (err) => {
        console.error('Error loading plugin', err);
        resolve();
    };
    scr.onload = () => {
        resolve();
    };

    scr.src = 'http://localhost:8391/app-plugin.js';

    document.body.appendChild(scr);
});

loadPlugins().then(() => {
    console.log('starting app');
    const app = createApp(App, {
        plugin: window.api.plugin,
    });

    app.component('GlobalText', GlobalText);

    app.mount('#app');
});
