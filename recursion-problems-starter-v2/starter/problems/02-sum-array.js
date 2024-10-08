/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!
*/


const sumArray = (arr1) => {
  if (arr1.length === 0) return 0

return arr1[0] + sumArray(arr1.splice(1))
}



// Examples:

sumArray([1, 2, 3]); //  6
// sumArray([0, 1, -3]); //  -2
// sumArray([1, 2, 3, 4, 5]); // 15


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
