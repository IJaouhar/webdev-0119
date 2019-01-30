const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((request, response) => {
  console.log('method', request.method);
  console.log('url', request.url);
  const { url, method } = request;
  if (url === '/') {
    const html = fs.readFileSync('./index.html');
    response.end(html)
  } else if (url === '/home') {
    const html = fs.readFileSync('./home.html');
    response.end(html);
  } else {
    response.statusCode = 404
    response.end('<h1>not found</h1>')
  }
});

server.listen(port, (err) => {
  if(err) {
    return console.log('I got an error', err)
  }
  console.log(`listening in port ${port}`);
})