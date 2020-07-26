import React, { useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { useFormFields } from "../hooks/forms";
import { signInWithGoogle, signIn } from "../auth/firebase/authentication";
import FormInput from "../components/FormInput";
import Header from "../components/Header";
import { PrimaryButton, SecondaryButton } from "../components/Button";
import { Form, ScreenContainer, PaddedContainer } from "../components/StyledComponents";
import ErrorMessage from "../components/ErrorMessage";

export const ErrorContainer = styled.div`
  height: 30px;
`;

const SignIn = () => {
  const [error, setError] = useState(null);
  const { formFields, createChangeHandler } = useFormFields({
    email: "",
    password: "",
  });

  const onClickSignIn = async (e) => {
    e.preventDefault();
    const result = await signIn({ ...formFields });
    if (result.error) {
      setError(result.message);
    }
  };

  const onClickSignInWithGoogle = () => {
    signInWithGoogle();
  };

  return (
    <ScreenContainer>
      <Header>Welcome</Header>
      <PaddedContainer>
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
          <ErrorMessage message={error} isShowing={!!error} />
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
