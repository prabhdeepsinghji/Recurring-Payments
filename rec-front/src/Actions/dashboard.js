export const GET_BALANCE = "GET_BALANCE";
export const SHOW_BALANCE = "SHOW_BALANCE";
export const SHOW_TRANSACTIONS = "SHOW_TRANSACTIONS";
export const TRANS_ADDED = "TRANS_ADDED";

export const getBalance = (token) => {
  return {
    type: GET_BALANCE,
    payload: token,
  };
};

export const showBalance = (balance) => {
  return {
    type: SHOW_BALANCE,
    payload: balance,
  };
};

export const showTransactions = (token, from, to) => {
  return {
    type: SHOW_TRANSACTIONS,
    payload: { token, from, to },
  };
};

export const transAdded = (data) => {
  return {
    type: TRANS_ADDED,
    payload: data,
  };
};
