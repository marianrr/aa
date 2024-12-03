const express = require('express');
const app = express();
const path = require("path")
// Your code here
// Part 1: Serve all files in assets folder
//app.use(express.static('assets'))

//app.use(express.static("assets/scripts"))

//app.use("/stylesheets", express.static("assets/css"))


app.use("/stickers", express.static("assets/images"))



const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));