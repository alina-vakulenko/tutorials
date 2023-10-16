import counterReducer, {
  increment,
  decrement,
  initialState,
} from "./counterSlice";

describe("Counter slice", () => {
  it("should return the default state when passed an empty action", () => {
    expect(counterReducer(undefined, { type: undefined })).toEqual(
      initialState
    );
  });
  it("should increment counter value by 1 with 'increment' action", () => {
    const incrementAction = { type: increment.type };
    expect(counterReducer(initialState, incrementAction)).toEqual({ value: 1 });
  });
  it("should decrement counter value by 1 with 'decrement' action", () => {
    const decrementAction = { type: decrement.type };
    expect(counterReducer(initialState, decrementAction)).toEqual({
      value: -1,
    });
  });
});
