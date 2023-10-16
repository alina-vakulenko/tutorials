import axios from "axios";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderTestApp } from "../../tests/helpers/renderTestApp";

jest.mock("axios");

describe("users", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
        },
      ],
    };
    axios.get.mockReturnValue(response);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("fetches users", async () => {
    renderTestApp(null, {
      route: "/users",
    });
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it("redirects to details page", async () => {
    const user = userEvent.setup();
    renderTestApp(null, {
      route: "/users",
    });
    const users = await screen.findAllByTestId("user-item");
    await user.click(users[0]);
    expect(screen.getByText(/USER DETAILS PAGE/i)).toBeInTheDocument();
  });
});
