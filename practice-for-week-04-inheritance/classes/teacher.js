const Person = require('./person');

// Your code here
// 1. Create a new `Teacher` class and have its `constructor` call the `super()`,
//    passing parameters needed for a `Person` and a `constructor` function that
//    takes in additional parameters for the `subject` they teach and their
//    `yearsOfExperience`. Check the specs to determine which parameters you need
//    to inherit.
// 2. Create a static method called `combinedYearsOfExperience` that takes in an
//    array of `Teacher` instances, `teachers`, as a parameter and returns the sum
//    of the `yearsOfExperience` of all `teachers`.



class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName)
this.subject = subject
this.yearsOfExperience = yearsOfExperience
  }

static combinedYearsOfExperience(teachers) {
let sum1 = [...teachers].reduce((sum, num) => sum + num.yearsOfExperience, 0)
 return sum1

}

}















/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}