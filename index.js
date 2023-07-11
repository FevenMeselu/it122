const http = require("http")
http.createServer((req, res) => {
  var path = req.url.toLowerCase();
  switch (path) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      break;
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      break;
  }).listen(process.env.PORT || 3000);