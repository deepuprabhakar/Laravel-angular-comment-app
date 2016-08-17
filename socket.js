var server = require('http').Server();

var io = require('socket.io')(server);

io.set("origins", "*:*");

var Redis = require('ioredis');

var redis = new Redis();

redis.subscribe('comment-channel');

redis.on('message', function(channel, message){
    message = JSON.parse(message);
    
    io.emit(channel + ':' + message.event, message.data);
});

server.listen(3000);