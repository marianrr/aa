const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let arr = []
  for(let i = 1; i <= 10; i++) {
    arr.push(addNums(i*increment))
  }
return arr
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let arr = []
  for(let j = 1; j <= 10; j++) {
    arr.push(addManyNums(j*increment))
  }
return arr
}

module.exports = [addNums10, addManyNums10];