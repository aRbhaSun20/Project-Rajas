export const USER_ACTIONS = {
  LOGIN: "login",
  LOGOUT: "logout",
};

export const UserReducers = (InitialState = {}, actions) => {
  switch (actions.type) {
    case USER_ACTIONS.LOGIN:
      return InitialState;

    default:
      return InitialState;
  }
};
