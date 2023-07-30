import express from 'express';
http.createServer((req, res) => {
  var path = req.url.toLowerCase();
  console.log(path)
  switch (path) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end("This is my home page")
      break;
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('I am a studet at SCC');
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      break;
  }
}).listen(process.env.PORT || 3000);
