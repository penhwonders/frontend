import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allEvents: [],
    searchType: "search",
    isError: false
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
    updateIsError: (state, err) => {
      state.isError = err
    }
  },
  actions: {
    updateSearchType: function({ commit }, newType) {
      commit("updateSearchType", newType);
    },
  },
});
