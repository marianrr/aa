const express = require("express")
const app = express()
const PORT = 5000
app.get("/", (req, res) => {
    res.send("have a nice day!")
}) 

app.listen(PORT, () => console.log("Listening on PORT ", PORT, ".", " http://localhost:5000"))