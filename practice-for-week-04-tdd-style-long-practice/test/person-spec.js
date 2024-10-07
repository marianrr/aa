const chai = require("chai")
const expect = chai.expect
const Person = require("../problems/person.js")

describe('3. Person class', function() {
let Person
beforeEach(() => {
    let person = new Person("marian web dev", 40)
})

it("should have the properties name and age", function(){
    expect(person).to.have.allkeys('name', 'age')
})
it("should have the properties name and age", function(){
    expect(person.name).to.equal('marian web dev')

})
it("should have the properties name and age", function(){
    expect(person.age).to.equal(40)

})

it("should return name and a greeting message", function(){
    expect(person.sayHello()).to.equal("marian web dev , bine ai venit in IT!!!")
})
it("should return the passed-in person instance", function(){
    expect(person1.visit(person2)).to.equal("Mai visited Erin")
})






})