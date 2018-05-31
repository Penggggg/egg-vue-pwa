const Vue = require('vue');
import Index from './page/index/index.vue';

export const createApp = ( ) => {
    const app = new Vue({
        render: h => h( Index )
    })
    return { app };
}