/*
Create a function `compare` which returns the number of identical characters at same position, from two String of same length.

If the two arguments doesn't have the same length or at least one is null, return -1 instead.

Example:
  string1  string2     result
* "a"      "a"         1
* "a"      "b"         0
* "aa"     "ba"        1
* "cassis" "castor"    3
* "tacos"  "poulpe"   -1
* null     "a"        -1

Add you own tests.

*/

// TODO add your code here
compare = (stringA, stringB) => {
  let a = stringA.split("");
  let b = stringB.split("");
  let count = 0;
  if (a.length !== b.length || a === null || b === null) {
    return -1;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      count++;
    }
  }
  return count;
};

module.exports = compare;
