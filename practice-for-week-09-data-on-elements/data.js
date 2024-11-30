const select1 = document.getElementsByTagName("select")[0]
const input1 = document.getElementsByTagName("input")[0]
const ul1 = document.querySelector("ul")


const click1 = (e) => {
    const li1 = document.createElement("li")
    li1.textContent = input1.value
    li1.setAttribute("data-type", select1.value) 
    ul1.appendChild(li1)
    e.preventDefault()
}




document.getElementsByTagName("button")[0].addEventListener("click", click1)