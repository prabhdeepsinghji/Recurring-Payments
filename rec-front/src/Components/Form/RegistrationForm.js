import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Snackbar, TextField } from "@mui/material";
import "./form.css";
import { connect, useDispatch } from "react-redux";
import { addUser } from "../../Actions/adduser";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .required("Required"),
});

function RegForm(props) {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data, props.user.token);
    dispatch(addUser(data, props.user.token));
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const success = props.msg === "success" ? true : false;
  return (
    <div className="form-block">
      <Snackbar open={success} message="User Added" />
      <h1>ADD USER</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e.target.value);
        }}
      >
        <div className="form-fields">
          <TextField
            type="text"
            id="name"
            name="name"
            a
            label="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-fields">
          <TextField
            type="text"
            id="email"
            name="email"
            label="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-fields">
          <TextField
            type="password"
            id="password"
            name="password"
            label="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <Button
          variant="contained"
          type="submit"
          className="form-fields submit-btn"
        >
          SUBMIT
        </Button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.login,
    msg: state.addUser.msg,
  };
};

export default connect(mapStateToProps)(RegForm);
