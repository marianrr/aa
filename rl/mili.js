const readline = require("readline")
const too = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

too.question("Luna asta devin senior developer?", lolo => {
    console.log("Raspunsul meu est: " + lolo)
too.close()
})