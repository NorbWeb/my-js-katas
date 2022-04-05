const compare = require("./string-compare");

test("compare function exists", () => {
  expect(typeof compare).toBe("function");
});

test("compare as two parameters", () => {
  expect(compare.length).toBe(2);
});

// TODO add your tests here

test("compare two strings with length 5", () => {
  expect(compare("colas", "coala")).toBe(2);
});

test("compare two strings with uneaven length", () => {
  expect(compare("colasf", "coala")).toBe(-1);
});

test("compare two strings with length 12", () => {
  expect(compare("colasArecool", "coalaarecool")).toBe(8);
});