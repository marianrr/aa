function mergeSort(arr) {
  // Base case: if the array has one or no elements, it's already sorted
  if (arr.length <= 1) return arr;

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  // Merge the two arrays while preserving order
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements from left or right
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage:
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(mergeSort(arr)); // Output: [1, 1, 2, 3, 4, 5, 5, 6, 9]
