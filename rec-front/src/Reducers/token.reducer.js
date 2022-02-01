import { TOKEN_VALID } from "../Actions/change-pass";

const initialState = {
  valid: false,
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_VALID:
      return { ...state, valid: true };
    default:
      return state;
  }
};

export default tokenReducer;
