import axios from "axios";

export function requestAddUser(action) {
  const { data, token } = action.payload;
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:8081/signup", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
