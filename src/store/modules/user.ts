import Vuex, { createStore } from "vuex";
import { userType } from "../index.d";
export default createStore<userType>({
  state: {
    avatar: "",
    nickname: "",
  },
  mutations: {
    SET_AVATAR(state: userType, value: string): void {
      state.avatar = value;
    },
    SET_NICKNAME(state: userType, value: string): void {
      state.avatar = value;
    },
  },
});
