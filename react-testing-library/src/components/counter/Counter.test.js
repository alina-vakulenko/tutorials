import userEvent from "@testing-library/user-event";

import { renderWithProvider } from "../../tests/helpers/renderWithProvider";
// import * as reduxHooks from "react-redux";
// import * as actions from "../../store/reducers/counterSlice";

import Counter from "./Counter";

// jest.mock("react-redux");
// const mockedSelector = jest.spyOn(reduxHooks, "useSelector");
// const mockedDispatch = jest.spyOn(reduxHooks, "useDispatch");

describe("Counter", () => {
  //   afterEach(() => {
  //     jest.restoreAllMocks();
  //   });

  it("should render Counter with initial value", async () => {
    const user = userEvent.setup();
    const { getByRole } = renderWithProvider(<Counter />, {
      counter: { value: 10 },
    });
    expect(getByRole("heading")).toHaveTextContent("10");
    await user.click(getByRole("button", { name: "Increment" }));
    expect(getByRole("heading")).toHaveTextContent("11");
    await user.click(getByRole("button", { name: "Decrement" }));
    expect(getByRole("heading")).toHaveTextContent("10");
  });

  //   it("should render Counter with value saved in the store", () => {
  //     mockedSelector.mockReturnValue(0);
  //     mockedDispatch.mockReturnValue(jest.fn());
  //     const component = render(<Counter />);
  //     expect(component).toMatchSnapshot();
  //   });
  //   it("should dispatch increment action", async () => {
  //     const user = userEvent.setup();
  //     const dispatch = jest.fn();
  //     mockedDispatch.mockReturnValue(dispatch);
  //     const mockedIncrement = jest.spyOn(actions, "increment");
  //     render(<Counter />);
  //     await user.click(screen.getByRole("button", { name: "Increment" }));
  //     expect(dispatch).toHaveBeenCalledTimes(1);
  //     expect(mockedIncrement).toHaveBeenCalledTimes(1);
  //   });
  //   it("should dispatch decrement action", async () => {
  //     const user = userEvent.setup();
  //     const dispatch = jest.fn();
  //     mockedDispatch.mockReturnValue(dispatch);
  //     const mockedDecrement = jest.spyOn(actions, "decrement");
  //     render(<Counter />);
  //     await user.click(screen.getByRole("button", { name: "Decrement" }));
  //     expect(dispatch).toHaveBeenCalledTimes(1);
  //     expect(mockedDecrement).toHaveBeenCalledTimes(1);
  //   });
});
