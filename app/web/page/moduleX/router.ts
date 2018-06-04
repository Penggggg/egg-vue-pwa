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
                component: ( ) => import('./index/index.vue'),
                children: [
                    {
                        path: 'list',
                        component: ( ) => import('./list/index.vue')
                        // component: r => require.ensure([], ( ) => r(require('./list/index.vue'), 'c1'))
                    },
                    {
                        path: 'detail',
                        component: ( ) => import('./detail/index.vue')
                    }
                ]
            }
        ]
    });
};