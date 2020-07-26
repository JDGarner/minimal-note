import React, { useContext } from "react";
import { Router } from "@reach/router";
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import PasswordReset from "./screens/PasswordReset";
import { UserContext } from "./providers/UserProvider";
import "./styles/index.css";
import "./styles/bootstrap.min.css";

function App() {
  const { user } = useContext(UserContext);

  return user ? (
    <Home />
  ) : (
    <Router>
      <SignIn path="/" />
      <SignUp path="signUp" />
      <PasswordReset path="passwordReset" />
    </Router>
  );
}

export default App;
