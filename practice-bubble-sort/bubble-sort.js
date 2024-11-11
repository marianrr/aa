
function bubbleSort(arr) {
let j = 1
    // Iterate through the array
    while(j === 1) {
for(let i = 0; i < arr.length; i++) {
  let j = 0
  if(arr[i] > arr[i+1]) {
    [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
    j = 1
  }
}
    }
console.log("array-ul este: ", arr)
        console.log(arr.join(","));

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning

}

module.exports = bubbleSort;