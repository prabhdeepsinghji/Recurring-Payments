export const IS_VALID_TOKEN = "IS_VALID_TOKEN";
export const TOKEN_VALID = "TOKEN_VALID";
export const CHANGE_PASS = "CHANGE_PASS";
export const PASS_CHANGED = "PASS_CHANGED";

export const isValidToken = (token) => {
  return {
    type: IS_VALID_TOKEN,
    payload: token,
  };
};

export const tokenValid = () => {
  return {
    type: TOKEN_VALID,
  };
};

export const changePass = (token, password) => {
  return {
    type: CHANGE_PASS,
    payload: { token, password },
  };
};

export const passChanged = () => {
  return {
    type: PASS_CHANGED,
  };
};
