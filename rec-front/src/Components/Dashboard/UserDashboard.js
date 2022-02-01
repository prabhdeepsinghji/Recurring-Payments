import React from "react";
import "./dashboard.css";
import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getBalance } from "../../Actions/dashboard";
import Modal from "react-modal";
import AddMoney from "./AddMoney";
import { showRecurring } from "../../Actions/reccpayaction";
import ReccTable from "./ReccTable";
import { useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function UserDashboard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(0);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(getBalance(props.user.token));
    dispatch(showRecurring(props.user.token));
  }, [showModal]);
  useEffect(() => {
    if (props.balance !== null) {
      setLoading(false);
    }
    setBalance(props.balance);
  }, [props.balance]);
  const handleTransaction = () => {
    navigate("/statement");
  };
  return (
    <div
      style={{
        width: "95%",
        maxWidth: "1065px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "2em",
      }}
    >
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={customStyles}
      >
        <AddMoney />
      </Modal>
      <div style={{ flex: 2 }}>
        {loading === true ? (
          <p>Loading...</p>
        ) : (
          <ReccTable data={props.data} token={props.user.token} />
        )}
      </div>
      <div className="container" style={{ flex: 1 }}>
        <div className="box">
          <p className="bal-text">Balance</p>
          {loading === true ? (
            <p className="bal">Loading...</p>
          ) : (
            <p className="bal">{balance}</p>
          )}
          <div className="btn">
            <button className="add-btn" onClick={() => setShowModal(true)}>
              Add Money
            </button>
            <button className="view-btn" onClick={handleTransaction}>
              View Statement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.login,
    balance: state.balance.balance,
    data: state.recclist.data,
  };
};
export default connect(mapStateToProps)(UserDashboard);
