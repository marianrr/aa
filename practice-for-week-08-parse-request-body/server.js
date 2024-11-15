const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
const http = require("http");

const PORT = 5000;
const server = http.createServer((req, res) => {
  let reqBody = '';

  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => {
    if (req.method === "POST") {
      try {
        req.body = parseBody(reqBody);
      } catch (err) {
        console.error(err);
      }
    }
    sendFormPage(req, res);
  });

  console.log(req.method, req.url);
});

const so = () => console.log(`Successfully started the server on port ${PORT}`);
server.listen(PORT, so);

module.exports = { server };