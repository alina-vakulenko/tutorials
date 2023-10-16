import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

// const validateEmailRegex = /^\S+@\S+\.\S+$/;

const validationSchema = yup.object({
  email: yup.string().required("Required").email("Invalid email address"),
  password: yup.string().required("Required"),
});

export default function ValidationWithFormik() {
  //   const validateEmail = (value) => {
  //     if (!value) {
  //       return "Required";
  //     } else if (!validateEmailRegex.test(value)) {
  //       return "Inavalid email address";
  //     }
  //   };

  //   const validatePassword = (value) => {
  //     if (!value) {
  //       return "Required";
  //     } else if (value.length < 6 || value.length >= 20) {
  //       return "Password length should be 6-20 characters";
  //     }
  //   };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log("submit", values)}
      className="form-wrapper"
    >
      {({ errors, touched }) => {
        <Form className="form">
          <label>Email</label>
          <Field
            name="email"
            type="text"
            //   validate={validateEmail}
          />
          {errors.email && touched.email && <div>{errors.email}</div>}
          <label>Password</label>
          <Field
            name="password"
            type="password"
            //    validate={validatePassword}
          />
          {errors.password && touched.password && <div>{errors.password}</div>}
          <button type="submit">Submit</button>
        </Form>;
      }}
    </Formik>
  );
}
