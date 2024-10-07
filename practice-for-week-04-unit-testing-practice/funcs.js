
function isFive(num) {
  if(num === 5) return true
  return false
}

function isOdd(number) {
if(typeof number !== "number") throw new Error("Error")
  if( number%2 === 0) return false
  return true


}

function myRange(min, max, step = 1) {
 



}


module.exports = { isFive, isOdd, myRange };