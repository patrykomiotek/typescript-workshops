"use strict";
// const http = require('http');
// http.createServer
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var PORT = 3002;
// handlers
var server = (0, http_1.createServer)();
server.listen(PORT);
