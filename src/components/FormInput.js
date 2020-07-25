import React from "react";

const FormInput = ({ ...inputProps }) => {
  return <input className="form-control" {...inputProps} />;
};

export default FormInput;
