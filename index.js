const https   = require('https');
const fs      = require('fs');
const PORT    = 8000;
var app       = require('express');
const options = {
    key: fs.readFileSync('./certs/key.pem'),
    cert: fs.readFileSync('./certs/cert.pem')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello World\n');
}).listen(PORT);

console.log("server running on ATM :  localhost:"+PORT );