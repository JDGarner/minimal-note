import React from "react";

const Button = ({ buttonTitle, onClick }) => {
  return <button onClick={onClick}>{buttonTitle}</button>;
};

export default Button;
