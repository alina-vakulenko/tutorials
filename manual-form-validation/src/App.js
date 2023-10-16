import BasicInputValidation from "./BasicInputValidation";
import CustomHookValidation from "./CustomHookValidation";
import ValidationWithFormik from "./ValidationWithFormik";

function App() {
  return (
    <div className="app">
      <BasicInputValidation />
      <CustomHookValidation />
      <ValidationWithFormik />
    </div>
  );
}

export default App;
