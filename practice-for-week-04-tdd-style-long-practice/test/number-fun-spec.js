// Your code here

const chai = require("chai")
const expect = chai.expect
const {returnsThree,reciprocal} = require("../problems/number-fun.js")

describe("1. function returns number 3", function() {
it("should return number 3", function(){

    expect(returnsThree()).to.equal(3)
})
})