declare interface userType {
  avatar: string;
  nickname: string;
}

declare interface appType {
  sideBar: boolean;
  size: string;
}

declare interface stateType {
  user: userType;
  app: appType;
}

export { userType, appType, stateType };
