var express = require('express');
var socket = require('socket.io');
var app = express();
var server = app.listen(4000, function(){
    console.log("merhaba port 4000");
}); 
// Static artik 

app.use(express.static('public'));


//Socket setup

var io = socket(server);

io.on('connection',function(socket){
    console.log('connection succesful!!',socket.id); 

    socket.on('chat',function(data){ 
        io.sockets.emit('chat',data);
        console.log(data.message);
    });
   
          
}); 
