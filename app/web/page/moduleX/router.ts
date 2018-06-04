const Vue = require('vue');
const VueRouter = require('vue-router');
import Index from './index/index.vue';

Vue.use( VueRouter );

const base = '/moduleX';

export const createRouter = ( ) => {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: `${base}/`,
                component: Index
            }
        ]
    });
};