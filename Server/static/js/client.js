// Client for connecting to websocket server
// The websocket server is the server for all gameplay functionality
// Client contains all functionality for basic gameplay
// API https://socket.io/docs/client-api/

console.log('[WebSocket] Trying to connect...');
var socket = io.connect('http://165.22.143.177:80');
console.log('[WebSocket] Connected.');
socket.emit('gamerequest');
console.log('[WebSocket] Sending game request.');

var player_paddle_num = -1;

socket.on('welcome', function() {
  console.log("[WebSocket] We are welcome :D");
});

socket.on('roomfull', function() {
  console.log('[WebSocket] Room is full :(');
  // TODO: Tell UI room is full
  
  // For now just disconnect
  socket.disconnect();
});

socket.on('ballpos', function() {

});

socket.on('canplay', function(data) {
  player_paddle_num = data['player'];
  console.log(`[WebSocket] Joined as paddle ${player_paddle_num}`);
  
});