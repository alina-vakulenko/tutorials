import React, { useState, useEffect } from "react";

export default function BasicInputValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(
    "Email field should not be blank"
  );
  const [errorPassword, setErrorPassword] = useState(
    "Password field should not be blank"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (errorEmail || errorPassword) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [errorEmail, errorPassword]);

  const emailHandler = (event) => {
    setEmail(event.target.value);
    const validateEmailRegex = /^\S+@\S+\.\S+$/;
    if (!validateEmailRegex.test(event.target.value)) {
      setErrorEmail("Invalid email");
      if (!event.target.value) {
        setErrorEmail("Email field should not be blank");
      }
    } else {
      setErrorEmail("");
    }
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 6) {
      setErrorPassword(
        "Invalid password. Password length should be at least 6 characters"
      );
      if (!event.target.value) {
        setErrorPassword("Password field should not be blank");
      }
    } else {
      setErrorPassword("");
    }
  };

  return (
    <form>
      <h1>Registration</h1>
      {touchedEmail && errorEmail && (
        <div style={{ color: "red" }}>{errorEmail}</div>
      )}
      <input
        name="email"
        value={email}
        onChange={emailHandler}
        onBlur={() => setTouchedEmail(true)}
        type="text"
        placeholder="Enter your email..."
      />
      {touchedPassword && errorPassword && (
        <div style={{ color: "red" }}>{errorPassword}</div>
      )}
      <input
        name="password"
        value={password}
        onChange={passwordHandler}
        onBlur={() => setTouchedPassword(true)}
        type="password"
        placeholder="Enter your password..."
      />
      <button disabled={!formValid} type="submit">
        Registration
      </button>
    </form>
  );
}
