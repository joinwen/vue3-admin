import Vuex from "vuex";
export default new Vuex.Store({
  state: {
    sideBar: false,
  },
  mutations: {
    SET_SIDE_BAR(state, value: boolean) {
      state.sideBar = value;
    },
  },
});
