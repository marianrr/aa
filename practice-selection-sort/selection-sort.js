function outOfPlaceSelectionSort(arr) {
  // Make a copy of the original array to keep it unmodified
  const copyArr = [...arr];
  const sortedArr = [];

  while (copyArr.length > 0) {
      // Find the index of the minimum element in the copy array
      let minIndex = 0;
      for (let i = 1; i < copyArr.length; i++) {
          if (copyArr[i] < copyArr[minIndex]) {
              minIndex = i;
          }
      }

      // Remove the smallest element from copyArr and add it to sortedArr
      sortedArr.push(copyArr.splice(minIndex, 1)[0]);
  }

  return sortedArr;
}

// Example usage
const originalArray = [29, 10, 14, 37, 13];
const sortedArray = outOfPlaceSelectionSort(originalArray);

console.log("Original array:", originalArray); // [29, 10, 14, 37, 13]
console.log("Sorted array:", sortedArray);     // [10, 13, 14, 29, 37]

function inPlaceSelectionSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
      // Assume the minimum is the first element in the unsorted part
      let minIndex = i;
      
      // Find the index of the minimum element in the unsorted part
      for (let j = i + 1; j < n; j++) {
          if (arr[j] < arr[minIndex]) {
              minIndex = j;
          }
      }
      
      // Swap the found minimum element with the first element in the unsorted part
      if (minIndex !== i) {
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
  }
  
  return arr;
}

// Example usage
const array = [29, 10, 14, 37, 13];
inPlaceSelectionSort(array);

console.log("Sorted array:", array); // [10, 13, 14, 29, 37]
