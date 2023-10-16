const validateValue = require("./validateValue");

describe("Value validation", () => {
  test("Value in the middle of range", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("Value of low end", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("Value of high end", () => {
    expect(validateValue(100)).toBe(true);
  });
  test("Value lower than low end", () => {
    expect(validateValue(-50)).toBe(false);
  });
  test("Value greater than high end", () => {
    expect(validateValue(150)).toBe(false);
  });
});
