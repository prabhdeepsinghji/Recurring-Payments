import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props) => {
  const auth = props.user.username !== null; // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login pagem
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    user: state.login,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
