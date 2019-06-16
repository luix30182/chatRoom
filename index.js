const express = require('express');
const app = express();

const server = app.listen(3000, function() {
    console.log('server running on port 3000');
});

const io = require('socket.io')(server);
io.configure(function () { 
    io.set("transports", ["xhr-polling"]); 
    io.set("polling duration", 10); 
}); 

io.on('connection', function(socket) {
    console.log(socket.id)
    socket.on('SEND_MESSAGE', (data) => {
        io.emit('MESSAGE', data);
    })
});