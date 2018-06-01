const Vue = require('vue');
import Index from './index/index.vue';

export const createApp = ( ) => {
    const app = new Vue({
        render: h => h( Index )
    });
    return { app };
};