/*******************************************************************************
Write a function `greaterCallbackValue` that accepts a value and two callbacks
as arguments. The function should pass the value to both callbacks and return the
result of the callback that is greater.*/

let greaterCallbackValue = function(val, cb1, cb2) {

// if(cb1(val) > cb2(val)) return cb1(val)
//     return cb2(val)

return cb1(val) > cb2(val)? cb1(val) :  cb2(val);

};





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = greaterCallbackValue;
