const Dragon = require("./dragon.js")

class EvilDragon extends Dragon{
    constructor(name, color, evilDoings, nemesis) {
super(name, color)
this.evilDoings = evilDoings
this.nemesis = nemesis
    }

    dontInviteThemOverForDinner() {
        console.log(`${this.name} will ${this.evilDoings[0]}`)
        console.log(`${this.name} will ${this.evilDoings[1]}`)
        console.log(`${this.name} will ${this.evilDoings[2]}`)
    }

    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`
    }

}

module.exports = EvilDragon