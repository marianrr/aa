function quickSort(arr) {
  // Base case: arrays with fewer than two elements are already sorted
  if (arr.length < 2) return arr;

  // Choose a pivot (last element in this case)
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  // Partition the array into left (less than pivot) and right (greater than pivot)
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort left and right, then combine them with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(quickSort(arr)); // Output: [1, 1, 2, 3, 4, 5, 5, 6, 9]
