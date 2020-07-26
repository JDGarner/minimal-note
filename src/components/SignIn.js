import React, { useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { useFormFields } from "../hooks/forms";
import { signInWithGoogle, signIn } from "../auth/firebase/authentication";
import FormInput from "./FormInput";
import Header from "./Header";
import { PrimaryButton, SecondaryButton } from "./Button";
import { Form, ScreenContainer, PaddedContainer } from "./StyledComponents";

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
      <Header>Welcome</Header>
      <PaddedContainer>
        {error !== null && <div>{error}</div>}
        <Form>
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
          <PrimaryButton onClick={(e) => onClickSignIn(e)} style={{ width: "100%" }}>
            Sign in
          </PrimaryButton>
          <SecondaryButton onClick={onClickSignInWithGoogle} style={{ width: "100%" }}>
            Sign in with Google
          </SecondaryButton>
        </Form>
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
