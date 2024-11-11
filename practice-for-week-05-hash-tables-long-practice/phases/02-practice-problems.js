function anagrams(str1, str2) {
  const s1 = str1.split("").sort().join("");
  const s2 = str2.split("").sort().join("");
  return s1 === s2;
}


function commonElements(arr1, arr2) {
  const set = new Set(arr1);
  let arr = [];
  arr2.forEach(elem => {
    if (set.has(elem)) arr.push(elem);
  });
  return arr;
}


function duplicate(arr) {
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) return arr[i];
    seen.add(arr[i]);
  }
  return undefined;

}


function twoSum(nums, target) {
  const seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) return true;
    seen.add(nums[i]);
  }
  return false;

}


function wordPattern(patternStr, wordsArr) {
  if (!patternStr || !wordsArr) return false;
  
  const patternMap = {};
  const wordsSet = new Set();
  
  if (patternStr.length !== wordsArr.length) return false;
  
  for (let i = 0; i < patternStr.length; i++) {
    const char = patternStr[i];
    const word = wordsArr[i];
    
    if (patternMap[char] !== undefined) {
      if (patternMap[char] !== word) return false;
    } else {
      if (wordsSet.has(word)) return false;
      patternMap[char] = word;
      wordsSet.add(word);
    }
  }
  
  return true;
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];