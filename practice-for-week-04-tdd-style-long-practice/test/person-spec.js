const chai = require("chai")
const expect = chai.expect
const Person = require("../problems/person.js")

describe('3. Person class', function() {
let Person
beforeEach(() => {
    let person = new Person("Clau", 40)
    let person2 = new Person("Erin", 20)
    let person3 = new Person("Marian", 33)
})

it("should have the properties name and age", function(){
    expect(person).to.have.allkeys('name', 'age')
})
it("should have the properties name and age", function(){
    expect(person.name).to.equal('Clau')

})
it("should have the properties name and age", function(){
    expect(person.age).to.equal(40)

})

it("should return name and a greeting message", function(){
    expect(person.sayHello()).to.equal("Clau , bine ai venit in IT!!!")
})
it("should return the passed-in person instance", function(){
    expect(person.visit(person2)).to.equal("Clau visited Erin")
})

it("should return visit('otherPerson')", function(){
    expect(person.switchVisit(person3)).to.equal("Clau visited Marian")
})

it("should update properties", function(){
    expect(person.update({ name: "lulu", age: 57 })).to.equal({ name: "lulu", age: 57 })
})

it("should update properties", function(){
    expect(person.update({ name: "zaza", age: 66 })).to.have.all.keys({ name: "zaza", age: 66 })
})

it("should update properties", function(){
    expect(() => person.update([])).to.throw(TypeError)
})


it("should update properties", function(){
    expect(() => person.update({name: "dj"})).to.throw(TypeError)
})

it("should update properties", function(){
    expect(() => person.update({age: 88})).to.throw(TypeError)
})




})