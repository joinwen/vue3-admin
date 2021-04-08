import { GetterTree } from "vuex";
import { stateType } from "./index.d";
export const getters: GetterTree<stateType, any> = {
  size: (state) => state.app.size,
  sideBar: (state) => state.app.sideBar,
  avatar: (state) => state.user.avatar,
  nickname: (state) => state.user.nickname,
};
