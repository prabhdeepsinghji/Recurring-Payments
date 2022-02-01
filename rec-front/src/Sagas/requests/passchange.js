import axios from "axios";

export function requestPasswordChange(action) {
  const { token, password } = action.payload;
  console.log(token, password);
  const message = new Promise((resolve, reject) => {
    axios
      .request({
        method: "post",
        url: "http://localhost:8081/user/save-password",
        data: {
          token,
          password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        resolve(res.data);
      });
  });
  return message;
}
