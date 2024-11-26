const dogs = [
    { id: 1, name: "emi" },
    { id: 2, name: "miha" },
    { id: 3, name: "geo" },
    { id: 4, name: "lol" },
]
const dogId = 2
console.log(dogs)

console.log(dogs.filter(dog => dog.id === dogId)[0])