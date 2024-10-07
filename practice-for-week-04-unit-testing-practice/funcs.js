
function isFive(num) {
  if(num === 5) return true
  return false
}

function isOdd(number) {
if(typeof number !== "number") throw new Error("Error")
  if( number%2 === 0) return false
  return true


}

function myRange(min, max, step = 1) {
 
  // describe("myRange(min, max, step)", () => {
  //   context("if step is not provided", () => {
  //     it("should return the correct array with default value step=1", () => {
  //       const [min1, max1] = [0, 5];
  //       const [min2, max2] = [6, 3];
  
  //       const actual1 = myRange(min1, max1);
  //       const expected1 = [0, 1, 2, 3, 4, 5];
  //       const actual2 = myRange(min2, max2);
  //       const expected2 = [];
  
  //       expect(actual1).to.eql(expected1);
  //       expect(actual2).to.eql(expected2);
  //     });
  //   });
  
  //   context("if step is provided", () => {
  //     it("should return the correct array", () => {
  //       const [min1, max1, step1] = [0, 5, 1];
  //       const [min2, max2, step2] = [0, 5, 2];
  //       const [min3, max3, step3] = [9, 5, 2];
  
  //       const actual1 = myRange(min1, max1, step1);
  //       const expected1 = [0, 1, 2, 3, 4, 5];
  //       const actual2 = myRange(min2, max2, step2);
  //       const expected2 = [0, 2, 4];
  //       const actual3 = myRange(min3, max3, step3);
  //       const expected3 = [];
  
  //       expect(actual1).to.eql(expected1);
  //       expect(actual2).to.eql(expected2);
  //       expect(actual3).to.eql(expected3);

if(!step) {
  if(min < max) {
    let arr = []
    for(let i = min; i<= max; i++) arr.push(i)
      return arr
  }
  else return []
}

if(step) {
  if(min < max) {
    let arr = []
    for(let i = min; i<= max; i+= step) arr.push(i)
      return arr
  }
  else return []
}


}


module.exports = { isFive, isOdd, myRange };