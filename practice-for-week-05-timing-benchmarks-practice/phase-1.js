// Adds up positive integers from 1-n
function addNums(n) {
  if(n <= 0) return 
  let sum = 0
  for(let i = 1; i <= n; i++) {
sum += i 
  }
return sum
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  if(n <= 0) return
 let sum = 0
 for(let j = 1; j <=n; j++) {
  sum += addNums(j)
 }
return sum
}



module.exports = [addNums, addManyNums];