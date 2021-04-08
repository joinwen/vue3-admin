import { createStore } from "vuex";
import { appType } from "../index.d";
export default createStore<appType>({
  state: {
    sideBar: false,
    size: "",
  },
  mutations: {
    SET_SIZE(state, value: string) {
      state.size = value;
    },
    SET_SIDE_BAR(state, value: boolean) {
      state.sideBar = value;
    },
  },
});
