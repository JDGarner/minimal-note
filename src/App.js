import React, { useContext } from "react";
import { Router } from "@reach/router";
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import PasswordReset from "./screens/PasswordReset";
import SignInWithEmailLink from "./screens/SignInWithEmailLink";
import "./styles/index.css";
import "./styles/bootstrap.min.css";

// TODO: add email verification with firebase?
// TODO: add separate tab for custom made auth system

function App() {
  return (
    <Router>
      <Home path="/" />
      <SignIn path="/signIn" />
      <SignUp path="signUp" />
      <PasswordReset path="passwordReset" />
      <SignInWithEmailLink path="signInWithLink" />
    </Router>
  );
}

export default App;
