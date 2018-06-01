const Vue = require('vue');
import Index from './index/index.vue';
import { createRouter } from './router';

export const createApp = ( ) => {
    const router = createRouter( );
    const app = new Vue({
        router,
        render: h => h( Index ),
    });
    return { app, router };
};