
const a = ["rs now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web s",
    "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more - or - less normal distribution of letters, as o",
    "rs now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web s",
    "esktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web s",
    "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more - or - less normal distribution of letters, as o",
    "esktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web s",
]


const kikila = () => {
    let miau = new Date()
    let hour = miau.getHours() + ":" + miau.getMinutes() + ":" + miau.getSeconds()
    console.log(hour)
    clock = document.getElementsByClassName("clock")[0]
    clock.textContent = hour
}
const c = setInterval(kikila, 1000)

const ul1 = document.getElementsByTagName("ul")[0]
ul1.setAttribute("type", "none")

a.forEach(elem => {
    const li1 = document.createElement("li")
    li1.textContent = elem
    ul1.appendChild(li1)

})

document.querySelector("p.clock").style.color = "red"
document.querySelector("p.clock").style.fontSize = "40px"
document.querySelectorAll("p")[1].style.textAlign = "center"