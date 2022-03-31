const abbreviate = require("./abbreviate-names");

test("abbreviate function exists", () => {
  expect(typeof abbreviate).toBe("function");
});

test("abbreviate as one parameter", () => {
  expect(abbreviate.length).toBe(1);
});

// TODO add your tests here
test("abbreviate as two parameter", () => {
  expect(abbreviate("Bob Dylan")).toBe("B.D");
});

test("abbreviate as three parameter", () => {
  expect(abbreviate("Alfre Kevin Ampelmann")).toBe("A.K.A");
});

test("abbreviate as four parameter", () => {
  expect(abbreviate("This Is Not Good")).toBe("T.I.N.G");
});

test("abbreviate as five parameter", () => {
  expect(abbreviate("Clowns Rights Appear Zero Yarns")).toBe("C.R.A.Z.Y");
});

test("abbreviate as six parameter", () => {
  expect(abbreviate("Steve Trolls Fuma Urgendly Mandatory Right")).toBe(
    "S.T.F.U.M.R"
  );
});
