import { routerType } from "../index.d";
import { constantRoutes } from "@/config/route-config/route.config";
export default {
  state: {
    routes: constantRoutes,
    addRoutes: [],
  },
  mutations: {
    SET_ROUTES(state: routerType, value: any[]) {
      state.routes = value;
    },
    SET_ADD_ROUTES(state: routerType, value: any[]) {
      state.addRoutes = value;
    },
  },
};
