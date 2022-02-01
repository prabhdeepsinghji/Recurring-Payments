import { USER_LOGGED_IN } from "../Actions/user";
// import { LOGOUT_USER } from "../Actions/user";

const initialState = {
  email: null,
  token: null,
  username: null,
  roles: null,
};

const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;
    default:
      return state;
  }
};

export default loginUserReducer;
