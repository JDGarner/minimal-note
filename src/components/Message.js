import React from "react";
import styled from "styled-components";

const StyledMessage = styled.div`
  display: ${(props) => (props.isShowing ? "block" : "none")};
  margin-bottom: 15px;
  padding-left: 10px;
`;

const Message = ({ message, isShowing }) => {
  return (
    <StyledMessage isShowing={isShowing} className="valid-feedback">
      {message}
    </StyledMessage>
  );
};

export default Message;
