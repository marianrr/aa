// Your code here

const chai = require("chai")
const expect = chai.expect
const {returnsThree,reciprocal} = require("../problems/number-fun.js")

describe("1. function returns number 3", function() {
it("should return number 3", function(){

    expect(returnsThree()).to.equal(3)
})
})

describe("function that return reciprocal number", function(){
    it("should throw a TypeError", function(){
        expect(() => {reciprocal(0)}).to.throw(TypeError)
    })
    it("should return n to power(-1)", function() {
        expect(reciprocal(4)).to.equal(0.25)
    })
    it("should return n to power(-1)", function() {
        expect(reciprocal(10)).to.equal(1/10)
    })
    it("should return n to power(-1)", function() {
        expect(reciprocal(4)).to.equal(0.25)
    })
    it("should return n to power(-1)", function() {
        expect(reciprocal(3/8)).to.equal(8/3)
    })
})