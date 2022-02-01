import { connect } from "react-redux";
// import RegForm from "./Form/RegistrationForm";
import UsersTable from "./Dashboard/UsersTable";
import GreetingComp from "./Form/GreetingComp";
import "./mainpage.css";

const MainPage = function MainPage(props) {
  console.log(props.user);
  return (
    <div className="flex-container">
      <GreetingComp username={props.user.username} screen={0} />
      <UsersTable />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.login,
  };
};

export default connect(mapStateToProps)(MainPage);
