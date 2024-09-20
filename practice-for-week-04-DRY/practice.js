const biggestNumber = (num1, num2) => {
if(num1 > num2) return num1
else return num2
}

const smallestNumber = (num1, num2) => {
  if(num1 < num2) return num1
  else return num2
  }


function multiplyBiggerNumByTwo(num1, num2) {
  const num = biggestNumber(num1, num2)
  return num*2
}

function divideBiggerNumByThree(num1, num2) {
  const num = biggestNumber(num1, num2)
  return num/3
}

function eatMostTacos(sum1, sum2) {
  const num = biggestNumber(sum1, sum2)
  return `I ate ${num} tacos.`;
  }


function adoptSmallerDog(weight1, weight2) {
  const num = smallestNumber(weight1, weight2)
  return `I adopted a dog that weighs ${num} pounds.`;
  }



/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};