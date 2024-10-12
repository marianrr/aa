class User {
  constructor(name) {
    this.name = name;
  }

// Prima solutie e sa fac un fat arrow in metoda clasei, ca sa tina minte "this".
   changeName = newName => {
    this.name = newName;
    return this.name;
  }
}

module.exports = User;