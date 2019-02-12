import http = require('http');
var fs = require('fs');
var index = fs.readFileSync('View/index.html');

var port = process.env.port || 1337
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(index);
}).listen(port);