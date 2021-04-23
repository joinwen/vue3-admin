declare interface userType {
  avatar: string;
  nickname: string;
}

declare interface appType {
  sideBar: boolean;
  size: string;
  isMobile: boolean;
  fixedSideBar: boolean;
  fixedHeader: boolean;
  sideDrawer: boolean;
}

declare interface routerType {
  routes: any[];
  addRoutes: any[];
}
declare interface stateType {
  user: userType;
  app: appType;
  router: routerType;
}

export { userType, appType, routerType, stateType };
