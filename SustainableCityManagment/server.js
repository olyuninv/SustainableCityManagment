"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
var fs = require('fs');
var css = require('css');
var index = fs.readFileSync('View/index.html');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(index);
}).listen(port);
//# sourceMappingURL=server.js.map