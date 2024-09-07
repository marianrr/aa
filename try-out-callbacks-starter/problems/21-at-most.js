/*******************************************************************************
Write a function `atMost` that accepts an array, a max number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
at most (fewer than or equal to) `max` elements of the array that result in true
when passed into the callback.**/

let atMost = function(arr, max, cb) {
let count = 0
for(let i = 0; i < arr.length; i++) {
    if(cb(arr[i])) count++
}

if(count <= max) return true
return false


};



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = atMost;
