import axios from "axios";

export function requestValidToken(action) {
  const token = action.payload;
  const message = new Promise((resolve, reject) => {
    axios
      .request({
        method: "post",
        url: "http://localhost:8081/user/valid-token",
        data: {
          token,
        },
        headers: {
          "Content-Type": "text/plain",
        },
      })
      .then((res) => {
        resolve(res.data);
      });
  });
  return message;
}

export function requestForgotPass(action) {
  const email = action.payload;
  const message = new Promise((resolve, reject) => {
    axios
      .request({
        method: "post",
        url: "http://localhost:8081/user/reset-password",
        data: {
          email,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        resolve(res.data);
      });
  });
  return message;
}
