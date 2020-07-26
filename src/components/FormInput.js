import React from "react";
import styled from "styled-components";

const Input = styled.input`
  margin-bottom: 15px;
`;

const FormInput = ({ ...inputProps }) => {
  return <Input className="form-control" {...inputProps} />;
};

export default FormInput;
