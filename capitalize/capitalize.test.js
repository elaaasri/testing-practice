import { capitalize } from "./capitalize.js";

test("capitalize first letter", () => {
  expect(capitalize("test")).toBe("Test");
});
