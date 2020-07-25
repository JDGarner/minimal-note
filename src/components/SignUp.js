import React, { useState } from "react";
import { Link } from "@reach/router";
import { useFormFields } from "../hooks/forms";
import { signInWithGoogle, createUser } from "../auth/firebase/authentication";

const SignUp = () => {
  const [error, setError] = useState(null);
  const { formFields, resetAllFields, createChangeHandler } = useFormFields({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onClickSignUp = async (e) => {
    e.preventDefault();

    createUser({ ...formFields });
    resetAllFields();
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        {error !== null && <div>{error}</div>}
        <form>
          <input
            id="firstName"
            type="text"
            placeholder="First Name"
            value={formFields.firstName}
            onChange={createChangeHandler("firstName")}
          />
          <input
            id="lastName"
            type="text"
            placeholder="Last Name"
            value={formFields.lastName}
            onChange={createChangeHandler("lastName")}
          />
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
          <button onClick={(e) => onClickSignUp(e)}>Sign up</button>
        </form>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        <p>
          Already have an account? <Link to="/">Sign in here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
