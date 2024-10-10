const chai = require("chai")
const expect = chai.expect
const Triangle = require("../problems/triangle.js")

describe("Triangle class", function(){

let triangle, triangle2
beforeEach(function(){
    triangle = new Triangle(10, 20, 30)
    triangle2 = new Triangle(21, 20, 30)
})

it("should have a constructor", function(){
    expect(triangle.side1).to.equal(10)
    expect(triangle.side2).to.equal(20)
    expect(triangle.side3).to.equal(30)
})

it("should return the perimeter", function(){
    expect(triangle.getPerimeter()).to.equal(60)
})

it("should validate", function(){
    expect(triangle.hasValidSideLengths()).to.be.false
    expect(triangle2.hasValidSideLengths()).to.be.true
})

it("should add an isValid property to constructor", function(){
    triangle.validate()
    triangle2.validate()
    expect(triangle.isValid).to.be.false
    expect(triangle2.isValid).to.be.true

})

it("should return all the instances of valid triangles", function(){
    expect(Triangle.getValidTriangles([triangle, triangle2])).to.deep.equal([triangle2])
})




})
