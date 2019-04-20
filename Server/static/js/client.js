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

socket.on('paddle_data', function(data) {
  themId = data['player']
  themIdx = themId - 1
  if (themIdx < 0) {
    return;
  }

  let theirdir = data['dir']

  if (theirdir == 0 && themIdx % 2 == 1) {
		if (playerArray[themIdx].y > 5) {
			playerArray[themIdx].y = playerArray[themIdx].y - 7;
		}
	}

	if (theirdir == 1 && themIdx % 2 == 1) {
		if (playerArray[themIdx].y < (screenHeight - 105)) {
			playerArray[themIdx].y = playerArray[themIdx].y + 7;
		}
	}

	if (theirdir == 0 && themIdx % 2 == 0) {
		if (playerArray[themIdx].x > 5) {
			playerArray[themIdx].x = playerArray[themIdx].x - 7;
		}
	}

	if (theirdir == 1 && themIdx % 2 == 0) {
		if (playerArray[themIdx].x < (screenWidth - 105)) {
			playerArray[themIdx].x = playerArray[themIdx].x + 7;
		}
	}
});

socket.on('canplay', function(data) {
  player_paddle_num = data['player'];
  console.log(`[WebSocket] Joined as paddle ${player_paddle_num}`);
  playerId = player_paddle_num;
});
