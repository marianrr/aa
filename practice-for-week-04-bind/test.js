const Employee = require("./employee")
const employee1 = new Employee("John Wick", "Dog Lover")
setTimeout(employee1.sayName.bind(employee1), 2000)
setTimeout(employee1.sayOccupation.bind(employee1), 3000)