/*
Create a function `countChar` which counts, in a given string, the number of times a character appears.

If the string or the character is null, return -1.
If the character length is other than 1, return -1.

Example:
* "" and "a" -> 0
* "a" and "a" -> 1
* "aaaaabbbaa" and "a" -> 7
* "bbacbaaa" and "c" -> 1
* "bbcc" and "a" -> 0
* null and "a" -> -1

Add you own tests.

*/

// TODO add your code here

countChar = (string, character) => {
  if (character.length != 1 || string === null || character === null) {
    return -1;
  } else if (character.length != 1) {
    return -1;
  }
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === character) count++;
  }
  return count;
};

module.exports = countChar;
