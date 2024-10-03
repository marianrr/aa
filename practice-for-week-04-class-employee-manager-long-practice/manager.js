const Employee = require("./employee")

function rec(employees) {
return employees.reduce((acc,num) => acc + num.salary)
    
}

class Manager extends Employee {
    constructor(name, salary, title, manager = null) {
super(name, salary, title, manager)
this.employees = []
    }
    addEmployee(employee) {
     this.employees.push(employee)
    }

    calculateBonus(multiplier) {
        const bonus = (this.salary + this._totalSubSalary()) * multiplier
        return bonus
      }

      _totalSubSalary() {
        let total = 0;
        for (let employee of this.employees) {
          if (employee instanceof Manager) {
            total += employee.salary + employee._totalSubSalary();
          } else {
            total += employee.salary;
          }
        }
        return total;
      }
    }





module.exports = Manager