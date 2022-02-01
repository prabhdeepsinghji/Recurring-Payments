export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
// export const USER_LOGGED_OUT = "USER_LOGGED_OUT";
export const USER_LOGGED_IN = "USER_LOGGED_IN";

export const loginUser = (username, password) => {
  return {
    type: LOGIN_USER,
    payload: { username, password },
  };
};

export const userLoggedIn = (user) => {
  return {
    type: USER_LOGGED_IN,
    user,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

// export const logoutUser = () => {
//   return {
//     type: LOGOUT_USER,
//   };
// };

// export const userLoggedOut = () => {
//   return {
//     type: USER_LOGGED_OUT,
//   };
// };
