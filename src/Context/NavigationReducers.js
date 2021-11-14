export const NAV_ACTIONS = {
  NAV_CHANGE: "nav_change",
  LOGOUT: "logout",
};

export const NavigationReducers = (InitialState = { current: "" }, actions) => {
  switch (actions.type) {
    case NAV_ACTIONS.NAV_CHANGE:
      return { ...actions.payload };

    default:
      return InitialState;
  }
};
