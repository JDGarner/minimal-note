import React, { useState } from "react";
import { Link } from "@reach/router";
import { useFormFields } from "../hooks/forms";
import { createUser } from "../auth/firebase/authentication";
import { Form, ScreenContainer, PaddedContainer } from "./StyledComponents";
import FormInput from "./FormInput";
import { PrimaryButton } from "./Button";
import Header from "./Header";

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
    <ScreenContainer>
      <Header>Welcome</Header>
      <PaddedContainer>
        {error !== null && <div>{error}</div>}
        <Form>
          <FormInput
            id="firstName"
            type="text"
            placeholder="First Name"
            value={formFields.firstName}
            onChange={createChangeHandler("firstName")}
          />
          <FormInput
            id="lastName"
            type="text"
            placeholder="Last Name"
            value={formFields.lastName}
            onChange={createChangeHandler("lastName")}
          />
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
          <PrimaryButton onClick={(e) => onClickSignUp(e)} style={{ width: "100%" }}>
            Sign up
          </PrimaryButton>
        </Form>
        <p>
          Already have an account?{" "}
          <Link className="btn btn-link" to="/">
            Sign in here
          </Link>
        </p>
      </PaddedContainer>
    </ScreenContainer>
  );
};

export default SignUp;
