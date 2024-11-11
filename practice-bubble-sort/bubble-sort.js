
function bubbleSort(arr) {

  let j = 1
  // Iterate through the array
  while(j === 1) {
    j = 0
for(let i = 0; i < arr.length; i++) {

if(arr[i] > arr[i+1]) {
  [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
  j = 1
}
console.log(arr.join(","));
}
}
//console.log("array-ul este: ", arr)

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning

}


module.exports = bubbleSort;