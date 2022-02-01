import { PASS_CHANGED } from "../Actions/change-pass";

const initialState = {
  changed: false,
};

const passReducer = (state = initialState, action) => {
  switch (action.type) {
    case PASS_CHANGED:
      return { ...state, changed: true };
    default:
      return state;
  }
};

export default passReducer;
