export const ADD_USER = "ADD_USER";
export const USER_ADDED = "USER_ADDED";

export const addUser = (data, token) => {
  return {
    type: "ADD_USER",
    payload: { data, token },
  };
};

export const userAdded = (msg) => {
  return {
    type: "USER_ADDED",
    payload: msg,
  };
};
