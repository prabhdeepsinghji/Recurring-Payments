import React from "react";
import { TextField } from "@mui/material";

function InputField(props) {
  return (
    <TextField id="outlined-required" label="name">
      {props.children}
    </TextField>
  );
}

export default InputField;
