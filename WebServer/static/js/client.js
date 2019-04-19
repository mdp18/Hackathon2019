//Client for connecting to websocket server
//The websocket server is the server for all gameplay functionality
//Client contains all functionality for basic gameplay

var socket = io('http://localhost');

function onConnect() {
  
}

socket.on('connect', function(){});
socket.on('event', function(data){});
socket.on('disconnect', function(){});