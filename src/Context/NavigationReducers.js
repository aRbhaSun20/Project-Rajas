export const NAV_ACTIONS = {
  NAV_CHANGE: "nav_change",
  LOGOUT: "logout",
};

export const NavigationReducers = (
  InitialState = {
    current: "Dashboard",
    loginStatus: false,
    loginType: "",
    loginPopUp: false,
  },
  actions
) => {
  switch (actions.type) {
    case NAV_ACTIONS.NAV_CHANGE:
      return { ...InitialState, ...actions.payload };
    case NAV_ACTIONS.LOGOUT:
      return {
        current: "Dashboard",
        loginStatus: false,
        loginType: "",
        loginPopUp: false,
      };
    default:
      return InitialState;
  }
};
