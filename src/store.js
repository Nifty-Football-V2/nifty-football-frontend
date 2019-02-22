import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        restUri: 'http://localhost:5000/futbol-cards/us-central1/api/',
    },
    mutations: {},
    actions: {}
});
