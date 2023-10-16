import { selectCounterValue } from "./counter";

describe("Counter selectors", () => {
  it("should return 0 if state is empty", () => {
    expect(selectCounterValue({})).toBe(0);
  });
  it("should select counter value from the state", () => {
    expect(selectCounterValue({ counter: { value: 100 } })).toBe(100);
  });
});
