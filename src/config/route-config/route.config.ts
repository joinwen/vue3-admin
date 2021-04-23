import BasicLayout from "@/layouts/basic-layout/BasicLayout.vue";
import CustomRouteRecordRaw from "@/config/route-config/route.record.raw";
import RouteView from "@/layouts/router-view/RouteView.vue";
const constantRoutes: Array<CustomRouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
    component: BasicLayout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/home/Home.vue"),
        meta: {
          title: "首页",
          icon: "el-icon-s-home",
        },
      },
      {
        path: "/table",
        name: "Table",
        component: RouteView,
        meta: {
          title: "表单",
          icon: "el-icon-s-grid",
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
        path: "/result",
        name: "Result",
        redirect: "/result/failure",
        component: RouteView,
        meta: {
          title: "结果页",
          icon: "el-icon-s-opportunity",
        },
        children: [
          {
            path: "/result/failure",
            name: "Failure",
            component: () => import("@/views/result/FailureResult.vue"),
            meta: {
              title: "失败页",
            },
          },
          {
            path: "/result/success",
            name: "Success",
            component: () => import("@/views/result/SuccessResult.vue"),
            meta: {
              title: "成功页",
            },
          },
        ],
      },
      {
        path: "/exception",
        name: "Failure",
        component: RouteView,
        meta: {
          title: "异常",
          icon: "el-icon-s-marketing",
        },
        children: [
          {
            path: "/exception/not-found",
            name: "ExceptionNotFound",
            component: () => import("@/views/exception/ExceptionNotFound.vue"),
            meta: {
              title: "not found",
            },
          },
          {
            path: "/exception/forbidden",
            name: "ExceptionForbidden",
            component: () => import("@/views/exception/ExceptionForbidden.vue"),
            meta: {
              title: "forbidden",
            },
          },
          {
            path: "/exception/error",
            name: "ExceptionError",
            component: () => import("@/views/exception/ExceptionError.vue"),
            meta: {
              title: "error",
            },
          },
        ],
      },
    ],
  },
];
const asyncRoutes: Array<CustomRouteRecordRaw> = [];
export { constantRoutes, asyncRoutes };
