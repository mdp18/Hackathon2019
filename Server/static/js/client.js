// Client for connecting to websocket server
// The websocket server is the server for all gameplay functionality
// Client contains all functionality for basic gameplay
// API https://socket.io/docs/client-api/

console.log('[WebSocket] Trying to connect...');
var socket = io.connect('http://165.22.143.177:80');
console.log('[WebSocket] Connected.');
socket.on('connect', function() {
    console.log('[WebSocket] Sending game request.');
    socket.emit('gamerequest');
});

socket.on('roomfull', function() {
  console.log('[WebSocket] Room is full :(');
  // TODO: Tell UI room is full
  
  // For now just disconnect
  socket.disconnect();
});

socket.on('canplay', function(data) {
  console.log('Can play!');
  console.log(data);
  console.log(data['player']);
});