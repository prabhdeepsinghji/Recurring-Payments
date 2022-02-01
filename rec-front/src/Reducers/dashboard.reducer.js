import { SHOW_BALANCE } from "../Actions/dashboard";

const initialState = {
  balance: null,
};

const balanceReducer = (state = initialState, action) => {
  const balance = action.payload;
  switch (action.type) {
    case SHOW_BALANCE:
      return { ...state, balance: balance };
    default:
      return state;
  }
};

export default balanceReducer;
