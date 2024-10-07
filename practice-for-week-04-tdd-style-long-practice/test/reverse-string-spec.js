// Your code here
const chai = require("chai")
const expect = chai.expect
const reverseString = require("../problems/reverse-string.js")

describe("function that reverse a string", function() {

   
    it("should return nuf string", function() {
        expect(reverseString("fun")).to.equal("nuf")
    })



})