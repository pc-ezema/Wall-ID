import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],

    state: {
        user: false,
        isAuthenticated: sessionStorage.getItem("access-token") !== null,
    },

    getters: {
        isAuthenticated(state) {
            return state.isAuthenticated;
        },
    },

    mutations: {
        updateUser(state, data) {
            state.user = data;
            if (state.user != false) {
                state.isAuthenticated = sessionStorage.getItem("access-token")
            } else {
                state.isAuthenticated = null;
                sessionStorage.clear();
            }
        },
    },

    actions: {}
});
