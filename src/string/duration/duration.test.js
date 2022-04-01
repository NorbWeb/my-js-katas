const convertTime = require("./duration");

test("convertTime function exists", () => {
  expect(typeof convertTime).toBe("function");
});

test("convertTime as one parameter", () => {
  expect(convertTime.length).toBe(1);
});

// TODO add your tests here

test("Test 1", () => {
  expect(convertTime("01:45")).toBe(105);
});

test("Test 2", () => {
  expect(convertTime("06:20")).toBe(380);
});

test("Test 3", () => {
  expect(convertTime("11:07")).toBe(667);
});

test("Test 4", () => {
  expect(convertTime("02h30m")).toBe(null);
});

test("Test 5", () => {
  expect(convertTime("g2:30")).toBe(null);
});
