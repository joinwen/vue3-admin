import { routerType } from "../index.d";
import { constantRoutes } from "@/config/route-config/route.config";
export default {
  state: {
    routes: constantRoutes,
    addRoutes: [],
  },
  mutations: {
    SET_ROUTES(state: routerType, value: never[]): void {
      state.routes = value;
    },
    SET_ADD_ROUTES(state: routerType, value: never[]): void {
      state.addRoutes = value;
    },
  },
};
