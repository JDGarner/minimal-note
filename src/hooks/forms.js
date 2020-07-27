import { useState, useCallback } from "react";

export const useFormField = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e) => setValue(e.target.value), []);

  return { value, onChange };
};

export const useFormFields = (initialValues) => {
  const [formFields, setFormFields] = useState(initialValues);

  const createChangeHandler = (key) => (e) => {
    const value = e.target.value;
    setFormFields((prev) => ({ ...prev, [key]: value }));
  };

  return { formFields, createChangeHandler };
};
