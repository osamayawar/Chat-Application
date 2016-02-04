var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
	console.log("a user connected");
	socket.on('disconnect', function(){
		console.log("a user disconnected");
	});
});

http.listen(8212, function(){
	console.log("Listening on 8212");
});