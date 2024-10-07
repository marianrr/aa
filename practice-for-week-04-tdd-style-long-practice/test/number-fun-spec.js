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
    it("should throw a RangeError", function(){
        expect(() => {reciprocal(0)}).to.throw(RangeError)
    })
    it("should throw a RangeError", function(){
        expect(() => {reciprocal(1_400_000)}).to.throw(RangeError)
    })
    it("should throw a RangeError", function(){
        expect(() => {reciprocal(-100_000)}).to.throw(RangeError)
    })
    it("should throw a RangeError", function(){
        expect(() => {reciprocal(1_100_000)}).to.throw(RangeError)
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
        expect(reciprocal(9/3)).to.equal(3/9)
    })
})

// cod refactorizat

// describe("function that returns reciprocal number", function() {
//     const errorCases = [0, 1_400_000, -100_000, 1_100_000];
//     const validCases = [
//         { input: 4, output: 0.25 },
//         { input: 10, output: 1/10 },
//         { input: 9/3, output: 3/9 }
//     ];

//     it("should throw a RangeError for invalid inputs", function() {
//         errorCases.forEach(value => {
//             expect(() => { reciprocal(value) }).to.throw(RangeError);
//         });
//     });

//     it("should return n to the power of -1 for valid inputs", function() {
//         validCases.forEach(({ input, output }) => {
//             expect(reciprocal(input)).to.equal(output);
//         });
//     });
// });