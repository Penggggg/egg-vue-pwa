const Vue = require('vue');
const Vuex = require('vuex');

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    state: {
        count: 1
    },
    actions: { },
    getters: { },
    mutations: { }
});