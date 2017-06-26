//Problem: We need a simple way to look at a user's badge count and Javascript point from a web broswer.
//Solution: Use Node.js to perform the profile look ups and server our template vis HTTP

var router = require('./router.js');


//Create a web server

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
	router.home(request, response);
	router.user(request, response);
}).listen(port);