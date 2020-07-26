import React, { useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { useFormFields } from "../hooks/forms";
import { sendResetEmail } from "../auth/firebase/authentication";
import FormInput from "../components/FormInput";
import Header from "../components/Header";
import { PrimaryButton, SecondaryButton } from "../components/Button";
import { Form, ScreenContainer, PaddedContainer } from "../components/StyledComponents";
import ErrorMessage from "../components/ErrorMessage";
import Message from "../components/Message";

export const ErrorContainer = styled.div`
  height: 30px;
`;

const PasswordReset = () => {
  const [message, setMessage] = useState(null);
  const { formFields, createChangeHandler } = useFormFields({
    email: "",
  });

  const onClickResetPassword = async (e) => {
    e.preventDefault();
    await sendResetEmail(formFields.email);
    setMessage("Reset email sent");
  };

  return (
    <ScreenContainer>
      <Header>Reset Password</Header>
      <PaddedContainer>
        <Form>
          <FormInput
            id="email"
            type="email"
            placeholder="Email"
            value={formFields.email}
            onChange={createChangeHandler("email")}
          />
          <Message message={message} isShowing={!!message} />
          <PrimaryButton onClick={(e) => onClickResetPassword(e)} style={{ width: "100%" }}>
            Send Reset Email
          </PrimaryButton>
        </Form>
        <Link className="btn btn-link" to="/">
          Back
        </Link>
      </PaddedContainer>
    </ScreenContainer>
  );
};

export default PasswordReset;
