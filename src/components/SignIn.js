import React, { useState } from "react";
import { Link } from "@reach/router";
import { useFormFields } from "../hooks/forms";
import { signInWithGoogle, signIn } from "../auth/firebase/authentication";
import FormInput from "./FormInput";
import styled from "styled-components";
import Header from "./Header";

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const PaddedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const SignIn = () => {
  const [error, setError] = useState(null);
  const { formFields, createChangeHandler } = useFormFields({
    email: "",
    password: "",
  });

  const onClickSignIn = (e) => {
    e.preventDefault();
    // TODO: add error handling
    signIn({ ...formFields });
  };

  const onClickSignInWithGoogle = async () => {
    const result = await signInWithGoogle();
    console.log(">>> onClickSignInWithGoogle result: ", result);
  };

  return (
    <ScreenContainer>
      <Header>Sign In</Header>
      <PaddedContainer>
        {error !== null && <div>{error}</div>}
        <form>
          <FormInput
            id="email"
            type="email"
            placeholder="Email"
            value={formFields.email}
            onChange={createChangeHandler("email")}
          />
          <FormInput
            id="password"
            type="password"
            placeholder="Password"
            value={formFields.password}
            onChange={createChangeHandler("password")}
          />
          <button className="btn btn-primary" onClick={(e) => onClickSignIn(e)}>
            Sign in
          </button>
        </form>
        <button className="btn btn-secondary" onClick={onClickSignInWithGoogle}>
          Sign in with Google
        </button>
        <Link className="btn btn-link" to="signUp">
          Sign up
        </Link>
        <Link className="btn btn-link" to="passwordReset">
          Forgot Password?
        </Link>
      </PaddedContainer>
    </ScreenContainer>
  );
};

export default SignIn;
