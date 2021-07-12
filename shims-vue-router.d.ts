import VueRouter, { Route } from "vue-router";
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $route: Route;
    $router: VueRouter;
  }
}
