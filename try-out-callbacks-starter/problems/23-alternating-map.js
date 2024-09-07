/*******************************************************************************
Write a function `alternatingMap` that accepts an array and two callbacks as
arguments. The function should return a new array containing the results of passing
the original elements into the callbacks in an alternating fashion.

In other words,
    - the first element should be passed to callback 1
    - the second element should be passed to callback 2
    - the third element should be passed to callback 1
    - the fourth element should be passed to callback 2
    - ... and so on*/


let alternatingMap = function(arr, cb1, cb2) {
    let arr2 = []
for(let i = 0; i < arr.length; i++) {
    if(i%2 === 0) arr2.push(cb1(arr[i]))
        else arr2.push(cb2(arr[i]))
    }


return arr2
};




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = alternatingMap;
