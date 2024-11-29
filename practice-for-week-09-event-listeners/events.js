const input1 = document.getElementById("red-input")
const submit1 = document.getElementById("add-item")
const input2 = document.querySelectorAll("input")[2]
const sel1 = document.querySelectorAll("section")[2]





const go = (e) => {
     sel1.style.backgroundColor = e.target.value
}


const co = (e) => {
    console.log(e.target.value)
    if (e.target.value === "red") {
        input1.style.setProperty("background-color", "red")
        
    }
}

const sub = (e) => {
    const input1 = document.querySelectorAll("input")[1].value
    console.log("inputul este: ", input1)
    const li1 = document.createElement("li")
    console.log("li este: ", li1)
    li1.textContent = input1
    console.log("li este: ", li1)
    document.getElementsByTagName("ul")[0].appendChild(li1)
}

const coco = () => {
    alert('"DOM" is loaded!')
    
    input1.addEventListener("keyup", co)
    console.log(input1.value)
    
}

submit1.addEventListener("click", sub)
input2.addEventListener("input", go)
window.onload = coco