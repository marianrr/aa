const Person = require('./person');

// Your code here

// Implement the following in the __classes/student.js__ file.

// 1. Create a new `Student` class and have its `constructor` call the `super()`,
//    passing the parameters needed for a `Person` and a `constructor` function
//    that takes in additional parameters for their `major` subject and `GPA`.
//    Check the specs to determine which parameters you need to inherit.
// 2. Create a static method called `compareGPA` which will take in two `Student`
//    instances as the first and second parameter and return a string comparing
//    the `GPA`s return "`<firstName>` `<lastName>` has the higher GPA." If they're
//    equal, return "Both students have the same GPA."

// Run the test specs in the __test/student-spec.js__ file to test that you
// have created the `Student` class correctly:


class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName)
    this.major = major
    this.GPA = GPA
  }
  static compareGPA(...students) {
    const [num1, num2] = students
    if (num1.GPA === num2.GPA) return "Both students have the same GPA"
    else if (num1.GPA > num2.GPA) return `${num1.firstName} ${num1.lastName} has the higher GPA.`
    else return `${num2.firstName} ${num2.lastName} has the higher GPA.`
  }
}







/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}