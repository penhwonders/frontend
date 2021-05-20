import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allEvents: [],
    searchType: "search",
  },
  getters: {
    getEventById: (state) => (id) => {
      return state.allEvents.filter((event) => event._id === id)[0];
    },
  },
  mutations: {
    updateAllEvents: (state, allEvents) => {
      state.allEvents = allEvents;
    },
    updateSearchType: function(state, newType) {
      state.searchType = newType;
    },
  },
  actions: {
    updateSearchType: function({ commit }, newType) {
      commit("updateSearchType", newType);
    },
  },
});
