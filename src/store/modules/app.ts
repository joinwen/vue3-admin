import { appType } from "../index.d";
export default {
  state: {
    sideBar: false,
    size: "",
    isMobile: false,
  },
  mutations: {
    SET_SIZE(state: appType, value: string) {
      state.size = value;
    },
    SET_SIDE_BAR(state: appType, value: boolean) {
      state.sideBar = value;
    },
    SET_IS_MOBILE(state: appType, value: boolean) {
      state.isMobile = value;
    },
  },
};
