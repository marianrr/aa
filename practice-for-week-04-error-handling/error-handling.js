// 1.
try {
  function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

let res = sum(null);
console.log(res);
} catch(e) {
  console.error("Eroarea este: ", e.name, e.message)
}
// 2.
// tests

// Your code here

const sayName = name => {
  if(typeof name !== 'string')  throw new Error("Invalid name! Must be a string!")
    else console.log(name)
    
}

try{
  sayName("Alex");
  sayName(1);
  
} catch(error) {
  console.error("The error is: ", error.name, "------", error.message)
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try{
greet()
} catch(e) {
console.error("The error is: ", e.name, "**********", e.message)
console.log("Hello World!")
}