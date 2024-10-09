const Dragon = require("./dragon")

class FriendlyDragon extends Dragon {
constructor(name, color, lifeGoals, friend) {
super(name, color)
this.lifeGoals = lifeGoals
this.friend = friend
}
}

module.exports = FriendlyDragon