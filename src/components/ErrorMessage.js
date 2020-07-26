import React from "react";
import styled from "styled-components";

const Error = styled.div`
  display: ${(props) => (props.isShowing ? "block" : "none")};
  margin-bottom: 15px;
  padding-left: 10px;
`;

const ErrorMessage = ({ message, isShowing }) => {
  return (
    <Error isShowing={isShowing} className="invalid-feedback">
      {message}
    </Error>
  );
};

export default ErrorMessage;
