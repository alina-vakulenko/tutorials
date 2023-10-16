import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProvider } from "../../tests/helpers/renderWithProvider";
import { renderWithRouter } from "../../tests/helpers/renderWithRouter";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";

describe("Test Router", () => {
  test("full app rendering/navigating", async () => {
    renderWithProvider(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const user = userEvent.setup();
    const mainLink = screen.getByRole("link", { name: "Main" });
    const aboutLink = screen.getByRole("link", { name: "About" });
    const usersLink = screen.getByRole("link", { name: "Users" });

    expect(screen.getByText(/main page/i)).toBeInTheDocument();
    await user.click(aboutLink);
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
    await user.click(usersLink);
    expect(screen.getByText(/users page/i)).toBeInTheDocument();
    await user.click(mainLink);
    expect(screen.getByText(/main page/i)).toBeInTheDocument();
  });

  test("landing on a bad page", () => {
    const badRoute = "/some/bad/route";
    renderWithRouter(null, badRoute);
    expect(screen.getByText(/error page/i)).toBeInTheDocument();
  });
});
