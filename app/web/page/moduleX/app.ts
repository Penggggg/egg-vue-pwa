const Vue = require('vue');
import Main from './main/index.vue';
import { createRouter } from './router';

export const createApp = ( ) => {
    const router = createRouter( );
    const app = new Vue({
        router,
        render: h => h( Main ),
    });
    return { app, router };
};