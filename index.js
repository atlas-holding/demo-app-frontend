const http = require('http');
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({
    service: 'demo-app-frontend',
    status: 'live',
    platform: 'DxP'
  }));
}).listen(port, () => {
  console.log(`demo-app-frontend running on port ${port}`);
});
