import http from 'node:http';

const server  = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello there');
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
