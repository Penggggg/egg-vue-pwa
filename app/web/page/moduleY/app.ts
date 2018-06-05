const Vue = require('vue');
// const routerSync = require('vuex-router-sync');
import Main from './main/index.vue';
import { createRouter } from './router';
import { createStore } from '../../store';
import { sync } from 'vuex-router-sync'
 
export const createApp = ( ) => {
    const store = createStore( );
    const router = createRouter( );

    sync( store, router );

    const app = new Vue({
        store,
        router,
        render: h => h( Main ),
    });
    return { app, router, store };
};