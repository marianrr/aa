const [addNums, addManyNums] = require("./phase-1");








function addNums10Timing(increment) {

  function addNums10(increment) {
    let arr = []
    for(let i = 1; i <= 10; i++) {
      arr.push(addNums(i*increment))
    }
  return arr
  }
}


function addManyNums10Timing(increment) {
  function addManyNums10(increment) {
    let arr = []
    for(let j = 1; j <= 10; j++) {
      arr.push(addManyNums(j*increment))
    }
  return arr
  }
}


n = 1000000
console.log(`addNums(${n}): `);
console.time("addNums10Timing")
addNums10Timing(1000000);
consoletimeEnd("addNums10Timing")

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
console.time("addManyNums")
addManyNums10Timing(5000);
console.timeEnd("addManyNums")