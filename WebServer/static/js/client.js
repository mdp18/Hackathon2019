//Client for connecting to websocket server
//The websocket server is the server for all gameplay functionality
//Client contains all functionality for basic gameplay

var socket = io('http://http://165.22.143.177:5122');

function onConnect() {
  console.log('[WebSocket] Connected!')
}

function onEvent(data) {
  console.log(`[WebSocket] Data: ${data}`)
}

function onDisconnect() {
  console.log('[WebSocket] Disconnect!')
}

socket.on('connect', onConnect);
socket.on('event', onEvent);
socket.on('disconnect', onDisconnect);