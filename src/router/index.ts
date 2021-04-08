import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { constantRoutes } from "@/config/route-config/route.config";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes,
});

export default router;
