import React, { useContext } from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
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
      <ResetPassword path="passwordReset" />
    </Router>
  );
}

export default App;
