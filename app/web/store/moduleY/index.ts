const Vue = require('vue');
const Vuex = require('vuex');

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    state: {
        haha: 2
    },
    actions: { },
    getters: { },
    mutations: { }
});