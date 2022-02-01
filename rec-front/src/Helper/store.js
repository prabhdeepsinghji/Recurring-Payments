import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import loginUserReducer from "../Reducers/user.reducer";
import { watcherSaga } from "../Sagas/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";
import tokenReducer from "../Reducers/token.reducer";
import passReducer from "../Reducers/changepass.reducer";
import forgotReducer from "../Reducers/forgotpass.reducer";
import balanceReducer from "../Reducers/dashboard.reducer";
import reccReducer, { reccShowReducer } from "../Reducers/recc.reducer";
import addUserReducer from "../Reducers/adduser.reducer";
import transactionsReducer from "../Reducers/transactions.reducer";

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_USER") {
    state = undefined;
  }

  return reducer(state, action);
};

const reducer = combineReducers({
  login: loginUserReducer,
  token: tokenReducer,
  pass: passReducer,
  forgot: forgotReducer,
  balance: balanceReducer,
  recc: reccReducer,
  recclist: reccShowReducer,
  addUser: addUserReducer,
  transactions: transactionsReducer,
});
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(watcherSaga);
export default store;
