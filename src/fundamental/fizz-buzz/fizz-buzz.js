/*
Create a function `fizzBuzz` which takes a number as parameter, and returns:
* "Fizz", if the argument is a multiple of 3
* "Buzz" if the argument is a multiple of 5
* "FizzBuzz", if the argument is a multiple of 3 and 5
* the argument as a string in any other case

*/

// TODO add your code here
fizzBuzz = (num) => {
if (num % 3 === 0 && num % 5 === 0) {return "FizzBuzz"}
else if (num % 5 === 0) { return "Buzz"}
else if (num % 3 === 0) { return "Fizz"}
else {return num.toString()}
};
// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof fizzBuzz, "function");
assert.strictEqual(fizzBuzz.length, 1);
assert.strictEqual(fizzBuzz(3), "Fizz");
assert.strictEqual(fizzBuzz(9), "Fizz");
assert.strictEqual(fizzBuzz(5), "Buzz");
assert.strictEqual(fizzBuzz(10), "Buzz");
assert.strictEqual(fizzBuzz(15), "FizzBuzz");
assert.strictEqual(fizzBuzz(30), "FizzBuzz");
assert.strictEqual(fizzBuzz(7), "7");
assert.strictEqual(fizzBuzz(13), "13");
// End of tests
