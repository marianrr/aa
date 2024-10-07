function returnsThree() {
  // Your code here
  return 3
}

function reciprocal(n) {
  // Your code here

if(n <1 || n > 1_000_000) throw new RangeError("this is an error, should not happening!")
return n**(-1)
}

module.exports = {
  returnsThree,
  reciprocal
};