import { resolve } from 'dns';

const Vue = require('vue');
const VueRouter = require('vue-router');

Vue.use( VueRouter );

const base = '/moduleX';

export const createRouter = ( ) => {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: `${base}/`,
                component: resolve => require(['./index/index.vue'], resolve),
                children: [
                    {
                        path: 'list',
                        component: resolve => require(['./list/index.vue'], resolve)
                    },
                    {
                        path: 'detail',
                        component: resolve => require(['./detail/index.vue'], resolve)
                    }
                ]
            }
        ]
    });
};