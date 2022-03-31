/*
Create a function `getLikes` which receives an array of names, and returns:
* [] => "Be the first to like this"
* ["Cartman"] => "Cartman likes this"
* ["Kenny", "Cartman"] => "Kenny and Cartman like this"
* ["Stan", "Kyle", "Kenny", "Cartman"] => "Stan and 3 other people like this"

*/

// TODO add your code here
getLikes = (arr) => {
  if (arr.length === 0) {
    return "Be the first to like this";
  } else if (arr.length === 1) {
    return `${arr[0]} likes this`;
  } else if (arr.length === 2) {
    return `${arr[0]} and ${arr[1]} like this`;
  } else if (arr.length > 3) {
    return `${arr[0]} and ${arr.length - 1} other people like this`;
  }
};
module.exports = getLikes;
