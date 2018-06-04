const Vue = require('vue');
const Vuex = require('vuex');

Vue.use(Vuex);

export const createStore = ( ) => new Vuex.Store({
    state: { },
    actions: { },
    getters: { },
    mutations: { }
});