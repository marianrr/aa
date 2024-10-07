module.exports = function reverseString(string) {
if(typeof string !== "string") throw new TypeError('Illegal salmon!');  

return string.split("").reverse().join("")

};