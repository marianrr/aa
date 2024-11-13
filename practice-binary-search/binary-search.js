function linearSearch (arr, target) {

  // Can you solve this in one line?

return arr.indexOf(target)


};

/**
 * Performs a binary search on a sorted array.
 *
 * @param {Array} arr The sorted array to search.
 * @param {Object} target The element to search for.
 * @return {Number} The index of the element if found, -1 otherwise.
 */
function binarySearch(arr, target) {

  let high = arr.length - 1;
  let low = 0;

  while (high >= low) {

    let mid = Math.floor((high + low) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

  }

  return -1;

}


module.exports = [linearSearch, binarySearch]