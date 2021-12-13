const http = require('http');
const webSocket = require('ws');

const wsServer = new webSocket.Server({port: 9000});

wsServer.on('connection', onConnect);

function onConnect(wsClient) 
{
	console.log("Сервер: Соединение установлено");
	wsClient.on('close', function() {console.log("Сервер: Соединение закрыто");});
	wsClient.on('message', function(message) {console.log(message);});
}
console.log("port 9000");