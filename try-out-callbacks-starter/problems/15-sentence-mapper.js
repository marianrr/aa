/*******************************************************************************
Write a function `sentenceMapper` that accepts a sentence and a callback as arguments.
The function should return a new sentence where every word of the original sentence
becomes the result of passing the word to the callback.*/



let sentenceMapper = function(sentence, cb) {

let arr = sentence.split(" ")
for(let i = 0; i < arr.length; i++) {
arr.splice(i, 1,  cb(arr[i]))
}
return arr.join(" ")
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = sentenceMapper;
