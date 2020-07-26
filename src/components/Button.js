import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-bottom: 15px;
`;

export const PrimaryButton = ({ onClick, children, style }) => {
  return (
    <Button className="btn btn-primary" onClick={onClick} style={style}>
      {children}
    </Button>
  );
};

export const SecondaryButton = ({ onClick, children, style }) => {
  return (
    <Button className="btn btn-secondary" onClick={onClick} style={style}>
      {children}
    </Button>
  );
};
