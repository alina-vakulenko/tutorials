import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { setupStore } from "../../store/store";
import AppRouter from "../../components/router/AppRouter";

export const renderTestApp = (
  component,
  options = { route: "/", initialState: { counter: { value: 0 } } }
) => {
  const store = setupStore(options?.initialState);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.route]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
