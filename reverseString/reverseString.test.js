import { reverseString } from "./reverseString.js";

test("reverse a string", () => {
  expect(reverseString("test")).toBe("tset");
});
