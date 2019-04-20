// Client for connecting to websocket server
// The websocket server is the server for all gameplay functionality
// Client contains all functionality for basic gameplay
// API https://socket.io/docs/client-api/

console.log('[WebSocket] Trying to connect...');
var socket = io.connect('http://playpongwith.me');
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

socket.on('paddle', function(data) {
  playerId = data['player']
  playerIdx = playerId - 1
  dir = data['dir']

  if (dir == 0 && playerIdx % 2 == 1) {
		if (playerArray[playerIdx].y > 5) {
			playerArray[playerIdx].y = playerArray[playerIdx].y - 7;
		}
	}

	if (dir == 1 && playerIdx % 2 == 1) {
		if (playerArray[playerIdx].y < (screenHeight - 105)) {
			playerArray[playerIdx].y = playerArray[playerIdx].y + 7;
		}
	}

	if (dir == 0 && playerIdx % 2 == 0) {
		if (playerArray[playerIdx].x > 5) {
			playerArray[playerIdx].x = playerArray[playerIdx].x - 7;
		}
	}

	if (dir == 1 && playerIdx % 2 == 0) {
		if (playerArray[playerIdx].x < (screenWidth - 105)) {
			playerArray[playerIdx].x = playerArray[playerIdx].x + 7;
		}
	}
});

socket.on('canplay', function(data) {
  player_paddle_num = data['player'];
  console.log(`[WebSocket] Joined as paddle ${player_paddle_num}`);
  playerId = player_paddle_num;
});
