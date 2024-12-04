const express = require('express');
const app = express();
const colorsRouter = require("./routes/colors.js")
const peopleRouter = require('./routes/people');
app.use(peopleRouter);
app.use("/colors", colorsRouter)
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));