/*
A palindrome is a word or a phrase that reads the same backwards as forwards, example. madam.

Create a function `isPalindrome` that returns if a word is a palindrome.

This function must not be case sensitive.

If the word is null or empty, return true.

Example:
* "rotor" -> true
* "tacos" -> false
* "Kayak" -> true
* null -> true

Add you own tests.

*/

// TODO add your code here

isPalindrome = (word) => {
  if (word === null || word === "") {
    return true;
  } else {
    let wordReverse = word.split("").reverse().join("").toLowerCase();
  }
  if (word === wordReverse) {
    return true;
  } else {
    return false;
  }
};

module.exports = isPalindrome;
