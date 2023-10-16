import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ToggleData from "./ToggleData";

describe("ToggleData", () => {
  it("renders correctly", () => {
    render(<ToggleData />);
    const helloWorldElement = screen.getByText(/hello world/i); // i means case insensitive
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("renders async data with style", async () => {
    render(<ToggleData />);
    const dataElement = await screen.findByText(/data/i);
    expect(dataElement).toBeInTheDocument();
    expect(dataElement).toHaveStyle({ color: "red" });
  });

  it("handles click event", async () => {
    const user = userEvent.setup();
    render(<ToggleData />);
    const btn = screen.getByRole("button");
    expect(screen.queryByText(/toggle/i)).toBeNull();
    await user.click(btn);
    expect(screen.queryByText(/toggle/i)).toBeInTheDocument();
    await user.click(btn);
    expect(screen.queryByText(/toggle/i)).toBeNull();
  });

  // it("handles input event", async () => {
  //   const user = userEvent.setup();
  //   render(<ToggleData />);
  //   const input = screen.getByPlaceholderText(/input value/i);
  //   expect(screen.getByRole("heading")).toHaveTextContent("");
  //   await user.type(input, "string value");
  //   expect(screen.getByRole("heading")).toHaveTextContent("string value");
  // });
});
