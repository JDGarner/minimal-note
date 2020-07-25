import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  padding-top: 10%;
  padding-bottom: 10%;
`;

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
