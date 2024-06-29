import calculator from "./calculator.js";

test("get basic operations", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.divide(4, 2)).toBe(2);
  expect(calculator.multiply(2, 2)).toBe(4);
});
