import axios from "axios";

export function requestAddRecurring(action) {
  return new Promise((resolve, reject) => {
    const { description, amount, startDate, noOfTimes, token } = action.payload;
    console.log(description, amount, startDate, noOfTimes);
    axios
      .request({
        method: "post",
        url: "http://localhost:8081/recurring_payment",
        data: {
          description,
          amount,
          startDate,
          noOfTimes,
        },
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((err) => console.log(err));
  });
}

export function requestShowRecurring(action) {
  return new Promise((resolve, reject) => {
    const token = action.payload;
    axios
      .request({
        method: "get",
        url: "http://localhost:8081/recurring_payment",
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => console.log(err));
  });
}

export function requestCancelRecc(action) {
  const { token, id } = action.payload;
  return new Promise((resolve, reject) => {
    axios
      .request({
        method: "put",
        url: "http://localhost:8081/cancel",
        data: {
          id: id,
        },
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => console.log(err));
  });
}
