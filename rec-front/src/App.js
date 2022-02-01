import "./App.css";
import React from "react";
import LoginPage from "./Components/Login/LoginPage";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Layout from "./layout/Layout";
import PrivateRoute from "./Components/PrivateRoute";
import { LoginRoute } from "./Components/LoginRoute";
import ForgotPassPage from "./Components/Login/ForgotPassPage";
import ChangePassword from "./Components/Login/ChangePassword";
import UserDashboard from "./Components/Dashboard/UserDashboard";
import NewRecurringPaymentPage from "./Components/Form/NewRecurringPaymentPage";
import AddUserPage from "./Components/Form/AddUserPage";
import Statement from "./Components/Dashboard/Statement";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<MainPage />} />
        </Route>
        <Route path="/login" element={<LoginRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/forgot" element={<ForgotPassPage />} />
        <Route path="/addusers" element={<AddUserPage />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/add-recurring" element={<NewRecurringPaymentPage />} />
        <Route path="/statement" element={<Statement />} />
      </Routes>
    </Layout>
  );
}

export default App;
