const express = require("express")
const app = express()
const PORT = 5000
const miau = (req, res) => {
    res.send("have a nice day!")
}
const dau = () => console.log("Listening on PORT ", PORT, ".", " http://localhost:5000")
const json1 = (req, res) => {
    res.json({ one: "two" })
}
const names = [{ko: "hau"}, {ll: "hh"}]
const hau = (req, res) => {
names.push({one: "two"})
res.json(names)
}
const iau = (req, res) => {
    res.json(names)
}

fetch("http://localhost:5000/names", {
    method: "POST",
    body: JSON.stringify({last: "one"}),
    headers: {"Content-Type": "application/json"}})
    .then(res => res.json())
    .then(names => console.log(names))




app.get("/names", iau)
app.post("/names", hau)
app.get("/", miau)
app.get("/json", json1)
app.listen(PORT, dau)