import React, { useState } from "react";
import { Link } from "@reach/router";
import { useFormFields } from "../hooks/forms";
import { signInWithGoogle, signIn } from "../auth/firebase/authentication";

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
    <div>
      <h1>Sign In</h1>
      <div>
        {error !== null && <div>{error}</div>}
        <form>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={formFields.email}
            onChange={createChangeHandler("email")}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={formFields.password}
            onChange={createChangeHandler("password")}
          />
          <button onClick={(e) => onClickSignIn(e)}>Sign in</button>
        </form>
        <button onClick={onClickSignInWithGoogle}>Sign in with Google</button>
        <Link to="signUp">Sign up</Link>
        <Link to="passwordReset">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default SignIn;
