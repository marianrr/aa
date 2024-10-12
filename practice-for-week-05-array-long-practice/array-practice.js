const findMinimum = arr => {
if(!arr.length) return undefined
  // Your code here
return Math.min(...arr)
};

const runningSum = arr => {

  // Your code here
const arr2 = []
let sum = 0
for(let i = 0; i < arr.length; i++) {
sum += arr[i]
arr2.push(sum)
}
return arr2
};

const evenNumOfChars = arr => {
let num = 0
  // Your code here
arr.forEach(elem => {
if(elem.length%2 === 0) num++
})
return num
};

const smallerThanCurr = arr => {

  // Your code here

  const arr2 = []
  for(let i = 0; i < arr.length; i++) {
    let k = 0
   for(j = 0; j < arr.length; j++) {
    
    if(arr[i] > arr[j]) k++
   }
   arr2.push(k)
  }

return arr2
};

const twoSum = (arr, target) => {

  // Your code here
for(let i = 0; i< arr.length; i++) {
  if(arr.includes(target-arr[i])) return true
}
return false

};

const secondLargest = arr => {
for(let i = 0; i < arr.length; i++) {
  if(a[i] < arr[i+1]) return arr[i] - arr[i+1]
else return arr[i+1] - arr[i]
}
  // Your code here
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];