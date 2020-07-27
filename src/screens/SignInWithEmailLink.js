import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { ScreenContainer } from "../components/StyledComponents";
import { isEmailLink, signInWithEmailLink } from "../auth/firebase/authentication";
import ErrorMessage from "../components/ErrorMessage";

const SignInWithEmailLink = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    async function signIn() {
      let e = window.localStorage.getItem("emailToVerify");
      const result = await signInWithEmailLink(e, window.location.href);
      if (result.error) {
        setError(result.message);
      }
    }

    if (isEmailLink(window.location.href)) {
      signIn();
    }
  }, []);

  return (
    <ScreenContainer>
      <Header>Verifying Email...</Header>
      <ErrorMessage message={error} isShowing={!!error} />
    </ScreenContainer>
  );
};

export default SignInWithEmailLink;
