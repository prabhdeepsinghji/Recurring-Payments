import axios from "axios";

export function requestGetBalance(action) {
  const token = action.payload;
  return new Promise((resolve, reject) => {
    axios
      .request({
        method: "get",
        url: "http://localhost:8081/balance",
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        resolve(res.data);
      });
  });
}

export function requestAddMoney(action) {
  const { token, amount } = action.payload;
  new Promise((resolve, reject) => {
    axios
      .request({
        method: "put",
        url: "http://localhost:8081/add",
        data: {
          amount: amount,
        },
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        resolve(res.data);
      });
  });
  return token;
}

export function requestShowTransactions(action) {
  const { token, from, to } = action.payload;
  const data = { from: from, to: to };
  console.log(data, token);
  return new Promise((resolve, reject) => {
    axios
      .request({
        method: "post",
        url: "http://localhost:8081/getStatement",
        data: data,
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => console.log(err));
  });
}
