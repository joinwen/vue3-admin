import { GetterTree } from "vuex";
import { stateType } from "./index.d";
export const getters: GetterTree<stateType, never> = {
  size: (state) => state.app.size,
  sideBar: (state) => state.app.sideBar,
  isMobile: (state) => state.app.isMobile,
  fixedHeader: (state) => state.app.fixedHeader,
  fixedSideBar: (state) => state.app.fixedSideBar,
  sideDrawer: (state) => state.app.sideDrawer,
  avatar: (state) => state.user.avatar,
  nickname: (state) => state.user.nickname,
  routes: (state) => state.router.routes,
};
