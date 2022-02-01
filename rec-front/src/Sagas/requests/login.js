import axios from "axios";

export function requestLogin(action) {
  return new Promise((resolve, reject) => {
    const { username, password } = action.payload;
    axios
      .request({
        method: "post",
        url: "http://localhost:8081/login",
        data: {
          email: username,
          password: password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const user = {
          username: res.data.username,
          token: res.data.jwt,
          email: username,
          roles: res.data.roles,
        };
        resolve(user);
      });
  });
}
