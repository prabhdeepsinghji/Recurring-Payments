import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { changePass, isValidToken } from "../../Actions/change-pass";
import { CircularProgress } from "@mui/material";
import { Snackbar } from "@mui/material";

const theme = createTheme();

function ChangePassword(props) {
  const dispatch = useDispatch();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const token = params.get("token");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(isValidToken(token));
    if (props.valid === true) {
      setLoading(false);
    }
    console.log(props.valid);
  }, [props.valid, dispatch, token]);
  // useEffect(() => {
  //   if (props.changed === true) {
  //     return <Snackbar message="Password Successfully Changed" />;
  //   }
  // }, [props.changed]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = data.get("password");
    console.log(token, password);
    dispatch(changePass(token, password));
  };
  return (
    <>
      {loading === true ? (
        <CircularProgress />
      ) : (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Reset Password
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  type="password"
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="password"
                  autoFocus
                />
                <TextField
                  type="password"
                  margin="normal"
                  required
                  fullWidth
                  id="cpassword"
                  label="Confirm Password"
                  name="cpassword"
                  autoComplete="cpassword"
                  autoFocus
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Reset Password
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    valid: state.token.valid,
    changed: state.pass.changed,
  };
};

export default connect(mapStateToProps)(ChangePassword);
