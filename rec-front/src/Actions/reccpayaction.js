export const ADD_RECURRING = "ADD_RECURRING";
export const RECC_ADDED = "RECC_ADDED";
export const SHOW_RECURRING = "SHOW_RECURRING";
export const RECC_SHOW = "RECC_SHOW";
export const CANCEL_RECC = "CANCEL_RECC";

export const addRecurring = (data) => {
  return {
    type: ADD_RECURRING,
    payload: data,
  };
};

export const reccAdded = (msg) => {
  return {
    type: RECC_ADDED,
    payload: msg,
  };
};

export const showRecurring = (token) => {
  return {
    type: SHOW_RECURRING,
    payload: token,
  };
};

export const reccShow = (data) => {
  return {
    type: RECC_SHOW,
    payload: data,
  };
};

export const cancelRecc = (token, id) => {
  return {
    type: CANCEL_RECC,
    payload: { token, id },
  };
};
