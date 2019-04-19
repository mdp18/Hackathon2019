//Client for connecting to websocket server
//The websocket server is the server for all gameplay functionality
//Client contains all functionality for basic gameplay

console.log('[WebSocket] Trying to connect...')
var socket = io.connect('http://165.22.143.177:80');
console.log('[WebSocket] Connected.')
socket.on('connect', function() {
    socket.emit('my event', {data: 'I\'m connected!'});
});