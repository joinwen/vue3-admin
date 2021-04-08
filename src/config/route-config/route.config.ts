import { RouteRecordRaw } from "vue-router";
import BasicLayout from "@/layouts/basic-layout/BasicLayout.vue";

const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/table",
  },
  {
    path: "/table",
    name: "Table",
    component: BasicLayout,
    meta: {
      title: "表单",
    },
    children: [
      {
        path: "/table/basic",
        name: "BasicTable",
        component: () => import("@/views/table/basic-table/BasicTable.vue"),
        meta: {
          title: "基础表单",
        },
      },
      {
        path: "/table/step",
        name: "StepTable",
        component: () => import("@/views/table/step-table/StepTable.vue"),
        meta: {
          title: "分步表单",
        },
      },
      {
        path: "/table/advanced",
        name: "AdvancedTable",
        component: () =>
          import("@/views/table/advanced-table/AdvancedTable.vue"),
        meta: {
          title: "高级表单",
        },
      },
    ],
  },
];
const asyncRoutes: Array<RouteRecordRaw> = [];
export { constantRoutes, asyncRoutes };
