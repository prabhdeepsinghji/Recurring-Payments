import { TRANS_ADDED } from "../Actions/dashboard";

const initialState = {
  data: [],
};

const transactionsReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case TRANS_ADDED:
      return { ...state, data: data };
    default:
      return state;
  }
};

export default transactionsReducer;
