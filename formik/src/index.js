import React from "react";
import ReactDOM from "react-dom/client";

import FormUseFormik from "./FormUseFormik";
import FormikComponent from "./FormikComponent";
import FormikWithCustomComponents from "./FormikWithCustomComponents";

import "./styles.css";

function App() {
  return (
    <>
      {/* <FormUseFormik /> */}
      {/* <FormikComponent /> */}
      <FormikWithCustomComponents />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
