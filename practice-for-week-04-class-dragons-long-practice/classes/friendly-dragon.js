const Dragon = require("./dragon")

class FriendlyDragon extends Dragon {
constructor(name, color, lifeGoals, friend) {
super(name, color)
this.lifeGoals = lifeGoals
this.friend = friend
}

hasLifeGoals() {
    console.log(`${this.name} likes to ${this.lifeGoals[0]}`)
    console.log(`${this.name} likes to ${this.lifeGoals[1]}`)
    console.log(`${this.name} likes to ${this.lifeGoals[2]}`)
}

helpsPeople() {
    return `${this.name} helps their friend ${this.friend}`
}


}

module.exports = FriendlyDragon