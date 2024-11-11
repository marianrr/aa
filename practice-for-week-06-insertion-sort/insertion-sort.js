// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  const sorted = [];
  const original = [...arr]; // Copy the original array

  while (original.length > 0) {
    console.log(sorted.join(',')); // Log the current state of the sorted array
    const value = original.pop(); // Pop a value from the original array
    let i = sorted.length - 1; // Start from the end of the sorted array

    while (i >= 0 && sorted[i] > value) {
      sorted[i + 1] = sorted[i]; // Shift the value to the right by 1
      i--;
    }

    sorted[i + 1] = value; // Insert the unsorted value at the break point
  }

  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(array) {
  let i = 1; // Set a pointer dividing the array into sorted and unsorted halves

  if (array.length < 2) {
    return array;
  }

  while (i < array.length) {
    const valueToInsert = array[i]; // Grab the first value from the unsorted half
    let j = i - 1; // Start from the divider

    while (j >= 0 && array[j] > valueToInsert) {
      array[j + 1] = array[j]; // Shift the value to the right by 1
      j--;
    }

    array[j + 1] = valueToInsert; // Insert the unsorted value at the break point
    i++; // Increment the dividing pointer
  }

  return array;
}

module.exports = [insertionSort, insertionSortInPlace];