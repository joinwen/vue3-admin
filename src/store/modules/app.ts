import { appType } from "../index.d";
export default {
  state: {
    sideBar: true,
    fixedSideBar: true,
    fixedHeader: true,
    size: "",
    isMobile: false,
    sideDrawer: false,
  },
  mutations: {
    SET_SIZE(state: appType, value: string): void {
      state.size = value;
      state.sideDrawer = state.isMobile = value == "xs";
    },
    SET_SIDE_BAR(state: appType, value: boolean): void {
      state.sideBar = value;
    },
    SET_IS_MOBILE(state: appType, value: boolean): void {
      state.isMobile = value;
    },
    SET_FIXED_SIDE_BAR(state: appType, value: boolean): void {
      state.fixedSideBar = value;
    },
    SET_FIXED_HEADER(state: appType, value: boolean): void {
      state.fixedHeader = value;
    },
    SET_SIDE_DRAWER(state: appType, value: boolean): void {
      state.sideDrawer = value;
    },
  },
};
