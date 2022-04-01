const countChar = require("./count-letters");

test("countChar function exists", () => {
  expect(typeof countChar).toBe("function");
});

test("test length", () => {
  expect(countChar.length).toBe(2);
});

// TODO add your tests here
/* * "" and "a" -> 0
 * "a" and "a" -> 1
 * "aaaaabbbaa" and "a" -> 7
 * "bbacbaaa" and "c" -> 1
 * "bbcc" and "a" -> 0
 * null and "a" -> -1 */

test("test 1", () => {
  expect(countChar("", "a")).toBe(0);
});

test("test 2", () => {
  expect(countChar("a", "a")).toBe(1);
});

test("test 3", () => {
  expect(countChar("aaaaabbbaa", "a")).toBe(7);
});

test("test 4", () => {
  expect(countChar("bbacbaaa", "c")).toBe(1);
});

test("test 5", () => {
  expect(countChar("bbcc", "a")).toBe(0);
});

test("test 6", () => {
  expect(countChar(null, "a")).toBe(-1);
});
