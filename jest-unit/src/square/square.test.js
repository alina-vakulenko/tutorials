const square = require("./square");

describe("Square number", () => {
  // Перед каждым тестом
  beforeEach(() => {
    // Добавить запись в БД
  });
  // один раз перед запуском всех тестов
  beforeAll(() => {});

  test("Argument 1", () => {
    expect(square(2)).toBe(4);
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  test("Argument greater than 1", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  afterEach(() => {
    // Удалить запись в БД после теста
    jest.clearAllMocks();
  });

  afterAll(() => {});
});
