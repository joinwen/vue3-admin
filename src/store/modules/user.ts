import { userType } from "../index.d";
export default {
  state: {
    avatar: "",
    nickname: "拂晓神剑",
  },
  mutations: {
    SET_AVATAR(state: userType, value: string): void {
      state.avatar = value;
    },
    SET_NICKNAME(state: userType, value: string): void {
      state.nickname = value;
    },
  },
};
