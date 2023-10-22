import Vue from 'vue';

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

    scr.src = 'http://localhost:8491/app-plugin.js';

    document.body.appendChild(scr);
});

loadPlugins().then(() => {
    console.log('starting app');

    Vue.component('GlobalText', GlobalText);

    new Vue({
        el: '#app',
        render: (h) => h(App),
    });
});
