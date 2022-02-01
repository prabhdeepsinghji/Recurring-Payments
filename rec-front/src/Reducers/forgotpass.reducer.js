import { FORGOT_PASS_SUCCESS } from "../Actions/forgot-pass";

const initialState = {
  success: false,
};

const forgotReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASS_SUCCESS:
      return { ...state, success: true };
    default:
      return state;
  }
};

export default forgotReducer;
