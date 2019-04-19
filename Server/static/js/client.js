//Client for connecting to websocket server
//The websocket server is the server for all gameplay functionality
//Client contains all functionality for basic gameplay

var socket = io.connect('http://' + document.domain + ':' + location.port);
    socket.on('connect', function() {
        socket.emit('my event', {data: 'I\'m connected!'});
    });