/*******************************************************************************
Write a function `firstIndex` that accepts an array and a callback as arguments.
The function should return the index of the first element of the array that
results in true when passed into the callback. If no elements of the array
result in true, then the function should return -1.
*/

let firstIndex = function(arr, cb) {
for(let val of arr) {
if(cb(val)) return arr.indexOf(val)
}

return -1
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = firstIndex;
