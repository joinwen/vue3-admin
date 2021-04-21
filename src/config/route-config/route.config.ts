import { RouteRecordRaw } from "vue-router";
import BasicLayout from "@/layouts/basic-layout/BasicLayout.vue";
import CustomRouteRecordRaw from "@/config/route-config/route.record.raw";
const constantRoutes: Array<CustomRouteRecordRaw> = [
  {
    path: "/",
    redirect: "/table",
    hidden: true,
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
  {
    path: "/exception",
    name: "Failure",
    component: BasicLayout,
    meta: {
      title: "异常",
    },
    children: [
      {
        path: "/exception/403",
        name: "403",
        component: () => import("@/views/exception/403.vue"),
        meta: {
          title: "403",
        },
      },
      {
        path: "/exception/404",
        name: "404",
        component: () => import("@/views/exception/404.vue"),
        meta: {
          title: "404",
        },
      },
      {
        path: "/exception/500",
        name: "500",
        component: () => import("@/views/exception/500.vue"),
        meta: {
          title: "500",
        },
      },
    ],
  },
  {
    path: "/result",
    name: "Result",
    component: BasicLayout,
    meta: {
      title: "结果页",
    },
    children: [
      {
        path: "/result/success",
        name: "Success",
        component: () => import("@/views/result/SuccessResult.vue"),
        meta: {
          title: "成功页",
        },
      },
      {
        path: "/result/failure",
        name: "Failure",
        component: () => import("@/views/result/FailureResult.vue"),
        meta: {
          title: "失败页",
        },
      },
    ],
  },
];
const asyncRoutes: Array<RouteRecordRaw> = [];
export { constantRoutes, asyncRoutes };
