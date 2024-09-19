const readline = require("readline")
const so = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let num = function getRandomIntInclusive(min, max) {
  return Math.round(Math.random() * (Number(max) - Number(min)) + Number(min));
}
  
so.question("Introduceti minimul: ", min => {
    console.log("Minimul este: " + min)


    so.question("Introduceti maximul: ", max => {
      console.log("Maximul este: " + max)

      let ss = num(min, max)

      console.log(ss)

  const coco = function() { so.question("Ghiceste numarul: ", ghici => {
if(Number(ghici) !== ss) {
    console.log(`Numarul introdus este : ${ghici}`)
coco()
      
    } 

else {
  console.log(`Ai ghicit numarul, este ${ss} .`)
  so.close()
  
}
})
}
coco()
})
})






