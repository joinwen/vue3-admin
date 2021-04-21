import { RouteRecordRaw } from "vue-router";

declare type CustomRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean;
};
export default CustomRouteRecordRaw;
