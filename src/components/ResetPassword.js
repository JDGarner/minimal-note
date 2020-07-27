import React, { useState } from "react";
import { Link } from "@reach/router";
import { useFormField } from "../hooks/forms";

const ResetPassword = () => {
  const [error, setError] = useState(null);
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const emailField = useFormField("");

  const sendResetEmail = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Reset your Password</h1>
      <div>
        <form action="">
          {emailHasBeenSent && <div>An email has been sent to you!</div>}
          {error !== null && <div>{error}</div>}
          <input id="email" type="email" placeholder="Email" {...emailField} />
          <button>Send me a reset link</button>
        </form>
        <Link to="/signIn">Back to sign in</Link>
      </div>
    </div>
  );
};
export default ResetPassword;
