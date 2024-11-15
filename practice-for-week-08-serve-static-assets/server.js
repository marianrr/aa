const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Setează calea către fișier în funcție de URL
  const filePath = req.url === '/' ? 'index.html' : `.${req.url}`;
  
  // Determină tipul de conținut pe baza extensiei fișierului
  const extname = path.extname(filePath);
  let contentType = 'text/html';
  
  switch (extname) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.jpg':
      contentType = 'image/jpeg';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
  }

  // Citește și servește fișierul
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
      } else {
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
