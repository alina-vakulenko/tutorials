import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { setupStore } from "../../store/store";

export function renderWithProvider(component, initialState) {
  const store = setupStore(initialState);

  return render(<Provider store={store}>{component}</Provider>);
}
