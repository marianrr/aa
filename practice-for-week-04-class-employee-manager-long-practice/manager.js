const Employee = require("./employee")
class Manager extends Employee {
    constructor(name, salary, title, manager, employees = []) {
super(name, salary, title, manager)
this.employees = employees
    }

    addEmployee(employee) {
        this.employees.push(employee)
    }

    calculateBonus(multiplier) {
        const sum = employees.reduce((sum, num) => sum+num.salary, 0)
        const bonus = this.salary * multiplier
        return bonus
    }
    
}

module.exports = Manager