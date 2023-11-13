import React, { useCallback } from "react";

// хук управления формой и валидации формы
export default function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [isValidInputs, setIsValidInputs] = React.useState({});

  const handleChange = (event) => {
    const input = event.target;
    const name = input.name;
    const value = input.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest("form").checkValidity());

    setIsValidInputs({ ...isValidInputs, [name]: input.checkValidity() });
  };

  const resetForm = useCallback(
    (
      newValues = {},
      newErrors = {},
      newIsValid = false,
      newIsValidInputs = {}
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setIsValidInputs(newIsValidInputs);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, isValidInputs, resetForm };
}
