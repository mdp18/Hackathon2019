//Client for connecting to websocket server
//The websocket server is the server for all gameplay functionality
//Client contains all functionality for basic gameplay

'use strict';

const WebSocket = require('./ws-6.2.1/websocket');
WebSocket.Server = require('./ws-6.2.1/websocket-server');
WebSocket.Receiver = require('./ws-6.2.1/receiver');
WebSocket.Sender = require('./ws-6.2.1/sender');

module.exports = WebSocket;

const ws = new WebSocket('ws://http://165.22.143.177:5122/');

// Websocket initialized
ws.on('open', function open() {
  console.log('[WebSocket] Connected!');
  ws.send(Date.now());
});

// Close handler
ws.on('close', function close() {
  console.log('[WebSocket] Disconnected!');
});

// Message handler
ws.on('message', function incoming(data) {
  console.log(`[WebSocket] Message: ${data}`);
});