function outOfPlaceInsertionSort(arr) {
  // Create a new empty array to hold the sorted elements
  const sortedArray = [];
  
  // Go through each element in the original array
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    let j = 0;

    // Find the correct position to insert the current element
    while (j < sortedArray.length && sortedArray[j] < current) {
      j++;
    }

    // Insert the current element into the sorted array
    sortedArray.splice(j, 0, current);
  }

  return sortedArray;
}

// Example usage
const originalArray = [4, 2, 7, 1, 3];
const sortedArray = outOfPlaceInsertionSort(originalArray);

console.log("Original Array:", originalArray);
console.log("Sorted Array:", sortedArray);

function inPlaceInsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    // Shift elements of arr[0..i-1], that are greater than current,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place the current element at its correct position
    arr[j + 1] = current;
  }

  return arr; // The original array is now sorted
}

// Example usage
const array = [4, 2, 7, 1, 3];
inPlaceInsertionSort(array);
console.log("Sorted Array:", array);
