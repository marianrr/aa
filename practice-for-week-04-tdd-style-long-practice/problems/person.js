class Person {
constructor(name, age) {
    this.name = name
    this.age = age
}

sayHello() {
    return `${this.name} , bine ai venit in IT!!!`
}
  
visit(obj) {
    return `${this.name} visited ${obj.name}`
}

switchVisit(obj) {
  return  obj.visit(this)
}

}

module.exports = Person;