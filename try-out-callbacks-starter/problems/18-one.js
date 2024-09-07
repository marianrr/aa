/*******************************************************************************
Write a function `one` that accepts an array and a callback as arguments. The
function should call the callback for each element of the array, passing in the
element and its index. The function should return a boolean indicating whether
or not exactly one element of the array results in true when passed into the callback.
*/

let one = function(arr, cb) {
    let count = 0
for(let i = 0; i < arr.length; i++) {
    if(cb(arr[i], i)) count++
}
if(count === 1) return true
return false
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = one;
