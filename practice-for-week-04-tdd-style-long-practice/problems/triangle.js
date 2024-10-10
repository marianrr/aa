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


class Scalene extends Triangle {
    constructor(side1,side2,side3) {
        super(side1, side2, side3)
        this.isValidScalene = false
    }

isScalene() {
    if((this.side1 !== this.side2) && (this.side2 !== this.side3) && (this.side1 !== this.side3)) return true
    return false
}

validate(){
    if(this.isScalene()) this.isValidScalene = true
    else this.isValidScalene = false
}


}



class Isosceles extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3)
        this.isValidIsosceles = false
    }


    isIsosceles() {
        if((this.side1 === this.side2) || (this.side2 === this.side3) || (this.side1 === this.side3)) return true
        return false
    }
    
    validate(){
        if(this.isIsosceles()) this.isValidIsosceles = true
        else this.isValidIsosceles = false
    }



}






module.exports = { Triangle, Scalene, Isosceles }