function returnsThree() {
  // Your code here
  return 3
}

function reciprocal(n) {
  // Your code here

if(n === 0) throw new TypeError("this is an error, should not happening!")
return n**(-1)
}

module.exports = {
  returnsThree,
  reciprocal
};