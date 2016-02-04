var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
	socket.on('chat message', function(data){
		io.emit('chat message', data);
		// console.log('chat msg: "' + data + '" emitted');
	});
});

http.listen(8212, function(){
	console.log("Listening on 8212");
});