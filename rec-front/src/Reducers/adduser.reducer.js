import { USER_ADDED } from "../Actions/adduser";

const initialState = {
  msg: null,
};

const addUserReducer = (state = initialState, action) => {
  const msg = action.payload;
  switch (action.type) {
    case USER_ADDED:
      return { ...state, msg };
    default:
      return state;
  }
};

export default addUserReducer;
