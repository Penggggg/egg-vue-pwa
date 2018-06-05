import { resolve } from 'dns';

const Vue = require('vue');
const VueRouter = require('vue-router');

Vue.use( VueRouter );

const base = '/moduleY';

export const createRouter = ( ) => {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: `${base}/`,
                component: resolve => require(['./index/index.vue'], resolve),
                children: [
                ]
            }
        ]
    });
};