import Vue from 'vue';
import Vuex from 'vuex';

//sample data from api
import events from './events.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        events
    },
    getters: {
        // 
    }
})