const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app);

server.listen(3000, function(){  
	console.log('서버 실행중...');
});