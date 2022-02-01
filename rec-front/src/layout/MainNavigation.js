// import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Actions/user";
// import { logoutUser } from "../Actions/user";

const MainNavigation = function MainNavigation(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roles = props.user.roles;
  return (
    <AppBar position="static" sx={{ padding: "0 5em" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            REC PAY
          </Typography>
          {props.user.token === null ? (
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                key="login"
                onClick={() => navigate("/login")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                LOGIN
              </Button>
            </Box>
          ) : (
            roles.map((role) => {
              if (role.authority === "ROLE_ADMIN") {
                return (
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                    <Button
                      key="dashboard"
                      onClick={() => navigate("/")}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      Dashboard
                    </Button>
                    <Button
                      key="addusers"
                      onClick={() => navigate("/addusers")}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      Add Users
                    </Button>
                    <Button
                      key="logout"
                      onClick={() => {
                        dispatch(logoutUser());
                        navigate("/login");
                      }}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      Logout
                    </Button>
                  </Box>
                );
              } else {
                return (
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                    <Button
                      key="dashboard"
                      onClick={() => navigate("/dashboard")}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      Dashboard
                    </Button>
                    <Button
                      key="addusers"
                      onClick={() => navigate("/add-recurring")}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      Setup New Recurring Payment
                    </Button>
                    <Button
                      key="logout"
                      onClick={() => {
                        dispatch(logoutUser());
                        navigate("/login");
                      }}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      Logout
                    </Button>
                  </Box>
                );
              }
            })
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.login,
  };
};

export default connect(mapStateToProps)(MainNavigation);
