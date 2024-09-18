const readline = require("readline")
const eu = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

eu.question("Azi sunt web developer?", raspuns => {
    console.log("Raspunsul este: " + raspuns)
    eu.close()
})