import { createStore } from "vuex";
import app from "@/store/modules/app";
import user from "@/store/modules/user";
import router from "@/store/modules/router";
import { getters } from "./getters";
export default createStore({
  mutations: {},
  actions: {},
  modules: {
    app,
    user,
    router,
  },
  getters,
});
