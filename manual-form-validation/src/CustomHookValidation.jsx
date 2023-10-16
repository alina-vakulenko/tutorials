import React, { useState, useEffect } from "react";

export default function CustomHookValidation() {
  const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
      for (const validation in validations) {
        switch (validation) {
          case "isEmpty":
            setIsEmpty(!value);
            break;
          case "minLength":
            setMinLengthError(value.length < validations[validation]);
            break;
          case "maxLength":
            setMaxLengthError(value.length > validations[validation]);
            break;
          case "isEmail":
            const validateEmailRegex = /^\S+@\S+\.\S+$/;
            setIsEmailError(!validateEmailRegex.test(value));
            break;
        }
      }
    }, [value]);

    useEffect(() => {
      if (isEmpty || minLengthError || maxLengthError || isEmailError) {
        setInputValid(false);
      } else {
        setInputValid(true);
      }
    }, [isEmpty, minLengthError, maxLengthError, isEmailError]);

    return {
      isEmpty,
      minLengthError,
      maxLengthError,
      isEmailError,
      inputValid,
    };
  };

  const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);

    const valid = useValidation(value, validations);

    const onChange = (e) => {
      setValue(e.target.value);
    };

    const onBlur = (e) => {
      setIsDirty(true);
    };

    return { value, isDirty, onChange, onBlur, ...valid };
  };

  const email = useInput("", { isEmpty: true, minLength: 5, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 8, maxLength: 20 });

  return (
    <form>
      <h1>Registration</h1>
      {email.isDirty && email.isEmpty && (
        <div style={{ color: "red" }}>This field should not be empty</div>
      )}
      {email.isDirty && email.minLengthError && (
        <div style={{ color: "red" }}>Min length is 5 characters</div>
      )}
      {email.isDirty && email.isEmailError && (
        <div style={{ color: "red" }}>Invalid email</div>
      )}
      <input
        name="email"
        value={email.value}
        onChange={(e) => email.onChange(e)}
        onBlur={(e) => email.onBlur(e)}
        type="text"
        placeholder="Enter your email..."
      />
      {password.isDirty && password.isEmpty && (
        <div style={{ color: "red" }}>This field should not be empty</div>
      )}
      {password.isDirty && password.minLengthError && (
        <div style={{ color: "red" }}>Min length is 8 characters</div>
      )}
      {password.isDirty && password.maxLengthError && (
        <div style={{ color: "red" }}>Max length is 20 characters</div>
      )}
      <input
        name="password"
        value={password.value}
        onChange={(e) => password.onChange(e)}
        onBlur={(e) => password.onBlur(e)}
        type="password"
        placeholder="Enter your password..."
      />
      <button
        disabled={!email.inputValid || !password.inputValid}
        type="submit"
      >
        Registration
      </button>
    </form>
  );
}
