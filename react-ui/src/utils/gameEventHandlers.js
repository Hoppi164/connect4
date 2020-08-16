import io from "socket.io-client";
// Extract current url
var backendURL = window.location.origin;
// If hosted online - set backend url to heroku app
if (!backendURL.includes("localhost")) {
  backendURL = "https://connect-4-backend.herokuapp.com/";
}
console.log("backendURL", backendURL);

const socket = io(backendURL);

const createListeners = (setMessage) => {
  const onSocketConnected = async () => {
    // Send local player data to the game server
    // socket.emit("new player", {name: 'test'});
    console.log("Socket Connected");
    requestRoomEntry();
    setMessage("Connected");
  };

  const onSocketDisconnect = async () => {
    // Socket disconnected
    console.log("Disconnected from socket server");
  };

  const requestRoomEntry = async () => {
    let roomID = 1234;
    console.log(`Requesting Entry To Room ${roomID}`);
    socket.emit("requestRoomEntry", { roomID: roomID });
  };
  const onJoinedRoom = async (data) => {
    console.log("Room Joined", data);
    // socket.emit("joinRoom", { roomID: "1234" });
  };
  // const socket = io.connect("http://localhost", {port: 8000, transports: ["websocket"]});
  // Start listening for events
  // Socket connection successful
  socket.on("connect", onSocketConnected);
  // Socket disconnection
  socket.on("disconnect", onSocketDisconnect);
  // Socket connection successful
  socket.on("joinedRoom", onJoinedRoom);
};

export default { createListeners };
