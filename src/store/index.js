import Vuex from 'vuex';
import Vue from 'vue';
import createPersistedState from 'vuex-persistedstate';
import todos from './modules/todos';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        todos,
        
    },
    plugins: [
        createPersistedState({
            key: "vuex-todo"
        })
    ]
})