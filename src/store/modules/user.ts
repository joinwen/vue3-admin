import Vuex from "vuex";
type stateType = {
  avatar: string;
  nickname: string;
};
export default new Vuex.Store({
  state: {
    avatar: "",
    nickname: "",
  },
  mutations: {
    SET_AVATAR(state: stateType, value: string): void {
      state.avatar = value;
    },
    SET_NICKNAME(state: stateType, value: string): void {
      state.nickname = value;
    },
  },
});
