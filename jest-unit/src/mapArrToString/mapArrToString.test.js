const mapArrToString = require("./mapArrToString");

describe("Array to strings", () => {
  test("Only integers", () => {
    expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]); // проверяет содержимое, а не ссылку
  });
  test("Array with not only integers", () => {
    expect(mapArrToString([1, null, 2, "string", undefined, 3])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });
  test("Empty array", () => {
    expect(mapArrToString([])).toEqual([]);
  });
  test("Negative", () => {
    expect(mapArrToString([1, 2, 3, "4"])).not.toEqual(["1", "2", "3", "4"]);
  });
});
