declare interface userType {
  avatar: string;
  nickname: string;
}

declare interface appType {
  sideBar: boolean;
  size: string;
  isMobile: boolean;
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
