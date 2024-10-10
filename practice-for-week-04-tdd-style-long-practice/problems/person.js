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

update(obj) {
    if(Array.isArray(obj) === "true")  throw new TypeError("It is not an object!")
if(typeof obj !== "object") throw new TypeError("It is not an object!")
if(!obj.name || !obj.age) throw new TypeError("The object is incomplete!")

this.name = obj.name
this.age = obj.age

}

tryUpdate(obj) {

    
}

}

module.exports = Person;