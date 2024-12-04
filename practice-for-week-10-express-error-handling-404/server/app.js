const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

app.get("/kikila", (req, res) => {
throw  new Error("Sorry, the requested resource couldn't be found.")
})


app.use((err, req, res, next) => {
console.error(err.message)
res.status(err.status || 500)
res.send("dj guga la felipa")

})


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));