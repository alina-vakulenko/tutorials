import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./styles.css";

export default function FormUseFormik() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    // if we want to use custom validation function,  pass it as "validate"
    // validate,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required")
        .max(15, "Must be 15 characters or less"),
      lastName: Yup.string()
        .required("Required")
        .max(20, "Must be 20 characters or less"),
      email: Yup.string().required("Required").email("Invalid email address"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      {/*  pass an id and name HTML attribute that matches the property we defined in initialValues */}
      {/* By default, Formik will validate after each keystroke (change event),
       each input’s blur event, as well as prior to submission. 
       The onSubmit function we passed to useFormik() will be executed only if 
       there are no errors (i.e. if our validate function returns {}). */}
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        {...formik.getFieldProps("firstName")} // returns all attributes below
        // name="firstName"
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        // value={formik.values.firstName}
      />
      {/* formik.errors is populated via the custom validation function.  */}
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        type="text"
        {...formik.getFieldProps("lastName")}
        // name="lastName"
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        // value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        {...formik.getFieldProps("emailName")}
        // name="email"
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        // value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
}
