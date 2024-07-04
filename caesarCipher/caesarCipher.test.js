import caesarCipher from "./caesarCipher.js";

test("caesar cipher", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
