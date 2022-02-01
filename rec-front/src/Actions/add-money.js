export const ADD_MONEY = "ADD_MONEY";
// export const MONEY_ADDED = "MONEY_ADDED";

export const addMoney = (token, amount) => {
  return {
    type: ADD_MONEY,
    payload: { token, amount },
  };
};

//   export const moneyAdded = (balance) => {
//       return{
//           type: MONEY_ADDED,
//           payload:
//       }
//   }
