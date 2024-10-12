const User = require('./classes/user');

const michelle = new User('Michelle');

function greetAfterNameChange(changeName, newName) {
  const name = changeName(newName);

  console.log(`Hi my name is ${name}`);
}

greetAfterNameChange(michelle.changeName, 'Elle');
//  A doua metoda e sa folosesc bind in contextul actual: ".bind(michelle)"
//greetAfterNameChange(michelle.changeName.bind(michelle), 'Elle');
  // should print out: Hi my name is Elle