const readline = require("readline")
const one = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

one.question("dj guga la felipa is here?", answer => {
    console.log("You responded:" + answer)
    console.log(2+22+222)
    one.close()
})