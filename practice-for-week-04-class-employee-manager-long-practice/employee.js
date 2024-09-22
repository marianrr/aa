class Employee {

constructor(name, salary, title, manager = null) {
this.name = name
this.salary = salary
this.title = title
this.manager = manager

  // If a manager is provided, add this employee to the manager's employees array

  if (manager) {
    manager.addEmployee(this);
}
}

calculateBonus(multiplier) {
    const bonus = this.salary * multiplier
    return bonus
}

}

module.exports = Employee