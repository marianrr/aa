const chai = require("chai")
const expect = chai.expect
const {Triangle, Scalene, Isosceles} = require("../problems/triangle.js")

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



describe("Scalene class", function(){
let scalene, scalene2, scalene3
beforeEach(function(){
    scalene = new Scalene(10,20,30)
    scalene2 = new Scalene(22, 22, 66)
    scalene3 = new Scalene(50, 60, 70)
})

it("should have constructor", function(){
    expect(scalene.side1).to.equal(10)
    expect(scalene.side2).to.equal(20)
    expect(scalene.side3).to.equal(30)
})

it("should return if is a valid scalene triangle", function(){
    expect(scalene.isScalene()).to.be.true
    expect(scalene2.isScalene()).to.be.false
})
it("should add an isValidScalene property to Scalene class", function(){
    scalene3.validate()
    scalene2.validate()
    expect(scalene2.isValidScalene).to.be.false
    expect(scalene3.isValidScalene).to.be.true
})


})


describe("isosceles class", function(){
    let isosceles, isosceles2, isosceles3
    beforeEach(function(){
        isosceles = new Isosceles(10,20,30)
        isosceles2 = new Isosceles(22, 22, 66)
        isosceles3 = new Isosceles(50, 60, 70)
    })
    
    it("should have constructor", function(){
        expect(isosceles.side1).to.equal(10)
        expect(isosceles.side2).to.equal(20)
        expect(isosceles.side3).to.equal(30)
    })
    
    it("should return if is a valid scalene triangle", function(){
        expect(isosceles.isIsosceles()).to.be.false
        expect(isosceles2.isIsosceles()).to.be.true
    })
    it("should add an isValidScalene property to Scalene class", function(){
        isosceles3.validate()
        isosceles2.validate()
        expect(isosceles2.isValidIsosceles).to.be.true
        expect(isosceles3.isValidIsosceles).to.be.false
    })
    
    
    })