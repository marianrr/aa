// Your code here
const chai = require("chai")
const expect = chai.expect
const reverseString = require("../problems/reverse-string.js")

describe("2. function that reverse a string", function() {

   
    it("should return nuf string", function() {
        expect(reverseString("fun")).to.equal("nuf")
    })

it('should throw a TypeError if type of "string" is not a string', function(){
    expect(() => {reverseString({})}).to.throw(TypeError)
})

})