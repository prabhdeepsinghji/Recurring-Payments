import React, { useEffect, useState } from "react";
import styles from "./addmoney.module.css";
import { connect } from "react-redux";
import { addMoney } from "../../Actions/add-money";
import { getBalance } from "../../Actions/dashboard";
import { useDispatch } from "react-redux";

function AddMoney(props) {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const onClick = (e) => {
    dispatch(addMoney(props.user.token, amount));
    dispatch(getBalance(props.user.token));
  };
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1 className={styles.heading}>Add Money</h1>
        <div>
          <p className={styles.bal}>
            Balance: <span className={styles.small}>₹ {props.balance}</span>
          </p>
          <form>
            <label className={styles.add_label} htmlFor={styles.add_amt}>
              Amount
            </label>
            <br />
            <input
              type="number"
              placeholder="Enter Amount"
              id="add-amt"
              name="add-amt"
              onChange={(e) => setAmount(e.target.value)}
            />
          </form>
          <button className={styles.add_btn} onClick={onClick}>
            Add Amount
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.login,
    balance: state.balance.balance,
  };
};

export default connect(mapStateToProps)(AddMoney);
