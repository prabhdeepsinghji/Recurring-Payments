// import React from "react";
// import { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import { Navigate, Outlet } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { isValidToken } from "../../Actions/change-pass";
// import CircularProgress from "@mui/material/CircularProgress";

// const PrivateRoute = (props) => {
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
//   const search = window.location.search;
//   const params = new URLSearchParams(search);
//   const token = params.get("token");
//   console.log(token);
//   useEffect(() => {
//     dispatch(isValidToken(token));
//     if (props.valid === true) {
//       setLoading(false);
//     }
//   }, [props.valid, dispatch, token]);
//   return loading === true ? <CircularProgress /> : <Outlet />;
// };

// const mapStateToProps = (state) => {
//   return {
//     valid: state.token.valid,
//   };
// };

// export default connect(mapStateToProps)(PrivateRoute);
