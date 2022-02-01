import { RECC_ADDED, RECC_SHOW } from "../Actions/reccpayaction";

const initialState = {
  msg: null,
};

const reccReducer = (state = initialState, action) => {
  const msg = action.payload;
  switch (action.type) {
    case RECC_ADDED:
      return { ...state, msg: msg };
    default:
      return state;
  }
};

const reccinitialState = {
  data: null,
};

export const reccShowReducer = (state = reccinitialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case RECC_SHOW:
      return { ...state, data };
    default:
      return state;
  }
};

export default reccReducer;
