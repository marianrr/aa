const chai = require("chai")
const expect = chai.expect
const Person = require("../problems/person.js")

describe('3. Person class', function() {
let Person
beforeEach(() => {
    let person = new Person("marian web dev", 40)
    let person3 = new Person("web dev", 4)
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

it("should return visit('otherPerson')", function(){
    expect(person.switchVisit(person2)).to.equal(visit(person2))
})

it('should return update(obj)', function(){
    expect(person.update(person3)).to.equal(person3)
})
it('should return update(obj)', function(){
    expect(() => person.update(['kikila'])).to.throw(TypeError)
})


it('should return update(obj)', function(){
    expect(person.update({name:"soso"})).to.equal(person3)

})

it('should return update(obj)', function(){
    expect(person.update({age: 66})).to.equal(person3)

})
/////////////

it('should return update(obj)', function(){
    expect(person.tryUpdate(person3)).to.equal(person3)

})

it('should return update(obj)', function(){
    expect(person.tryUpdate(person3)).to.equal("true")

})

it('should return update(obj)', function(){
    expect(person.tryUpdate({})).to.equal("false")

})

// it('should return update(obj)', function(){
//     expect(person.greetAll(person3)).to.equal([])

// })




})
