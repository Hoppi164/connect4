/**************************************************
** Server Setup
**************************************************/
const express = require('express');
const app = express();
var util = require("util");
const path = require('path');
var server = require('http').Server(app);
var io = require('socket.io')(server, { origins: '*:*'});

const PORT = process.env.PORT || 5000;
var rooms = {};
// rooms {id: room}
// Room 
//   Room ID
//   Players = [RedPlayerID, YellowPlayerID]
//   Board
//   RedsTurn





var listenForSocketEvents = function() {
  io.sockets.on("connection", onSocketConnection);
};
listenForSocketEvents();



/**************************************************
** Routes
**************************************************/
// Serve static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});




/**************************************************
** Web-Sockets
**************************************************/

// New socket connection
function onSocketConnection(client) {
  util.log("New player has connected: "+client.id);

  // Listen for client disconnected
  client.on("disconnect", onClientDisconnect);
  // Listen for client joining Room
  client.on("joinRoom", onJoinRoom);
}


// Client has disconnected
function onClientDisconnect() {
  util.log("Player has disconnected: ");

  // Broadcast removed player to connected socket clients
  this.broadcast.emit("remove player", {id: 'test'});
};

// Client is attempting to join room
function onJoinRoom(data) {
  util.log("joinRoom Requested: " + data.roomID);
};




// The server should start listening
server.listen(PORT, function () {
  console.error(`Node listening on port ${PORT}`);
});