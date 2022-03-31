/*
Create a function `abbreviate` which converts a name into initials.

The output should be capital letters with a dot separating them.

Example:
* "Alyson Hannigan" -> "A.H"
* "Cobie Smulders" -> "C.S"
* "Neil Patrick Harris" -> "N.P.H"

Add you own tests.

*/

// TODO add your code here
abbreviate = (text) => {
  const firstLetters = text
    .split(" ")
    .map((element) => element[0])
    .join(".");
  return firstLetters;
};

module.exports = abbreviate;
