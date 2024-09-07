/*******************************************************************************
Write a function `none` that accepts an array and a callback as arguments.
The function should call the callback for each element of the array, passing in
the element. The function should return true if all
elements of the array result to false when passed into the callback. Otherwise,
the method should return false.*/

let none = function(arr, cb) {

for(let i = 0; i < arr.length; i++) {
    if(cb(arr[i])) return false
}
return true
};


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = none;
