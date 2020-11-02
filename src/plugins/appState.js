import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchType: "search",
  },
  mutations: {
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
