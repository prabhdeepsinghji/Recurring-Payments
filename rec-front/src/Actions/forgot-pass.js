export const FORGOT_PASS = "FORGOT_PASS";
export const FORGOT_PASS_SUCCESS = "FORGOT_PASS_SUCCESS";

export const forgotPass = (email) => {
  return {
    type: FORGOT_PASS,
    payload: email,
  };
};

export const forgotPassSuccess = () => {
  return {
    type: FORGOT_PASS_SUCCESS,
  };
};
