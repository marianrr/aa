class Triangle {
    constructor(side1, side2, side3){
this.side1 = side1
this.side2 = side2
this.side3 = side3
this.isValid = false
    }
    getPerimeter() {
        return this.side1+this.side2+this.side3
    }

    hasValidSideLengths() {
        if((this.side1+this.side2 > this.side3) && (this.side1+this.side3 > this.side2) && (this.side2+this.side3 > this.side1)) return true
    return false
    }

    validate(){
        if(this.hasValidSideLengths()) this.isValid = true
        else this.isValid = false
    }

static getValidTriangles(coco) {
    return coco.filter(elem => elem.hasValidSideLengths())
}


}


module.exports = { Triangle, Scalene }