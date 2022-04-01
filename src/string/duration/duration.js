/*
Create a function `convertTime` which converts a time formatted as "hh:mm" in a duration in minuts.

If the argument is not correctly formatted, return null.

* "02:30" -> 150
* "01:45" -> 105
* "01h45m" -> null

Add you own tests.

*/

// TODO add your code here

convertTime = (time) => {
  let arr = time.split(":");
  let val1 = Number(arr[0]);
  let val2 = Number(arr[1]);

  if (isNaN(val1) || isNaN(val2)) {
    return null;
  } else {
    let check = val1 * 60 + val2;
    return check;
  }
};

console.log(convertTime("g2:30"));

module.exports = convertTime;
