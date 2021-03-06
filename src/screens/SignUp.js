import React, { useState } from "react";
import { Link } from "@reach/router";
import { useFormFields } from "../hooks/forms";
import { signUpUser } from "../auth/firebase/authentication";
import { Form, ScreenContainer, PaddedContainer } from "../components/StyledComponents";
import FormInput from "../components/FormInput";
import { PrimaryButton } from "../components/Button";
import Header from "../components/Header";
import ErrorMessage from "../components/ErrorMessage";

const SignUp = () => {
  const [error, setError] = useState(null);
  const { formFields, createChangeHandler } = useFormFields({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onClickSignUp = async (e) => {
    e.preventDefault();

    const result = await signUpUser({ ...formFields });
    if (result.error) {
      setError(result.message);
    }
  };

  return (
    <ScreenContainer>
      <Header>Welcome</Header>
      <PaddedContainer>
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
          <ErrorMessage message={error} isShowing={!!error} />
          <PrimaryButton onClick={(e) => onClickSignUp(e)} style={{ width: "100%" }}>
            Sign up
          </PrimaryButton>
        </Form>
        <p>
          Already have an account?{" "}
            <Link className="btn btn-link" to="/signIn">
              Sign in here
            </Link>
        </p>
      </PaddedContainer>
    </ScreenContainer>
  );
};

export default SignUp;
