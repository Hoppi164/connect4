import io from "socket.io-client";
const socket = io(window.location.origin);

const createListeners = (setMessage) => {
  const onSocketConnected = async () => {
    // Send local player data to the game server
    // socket.emit("new player", {name: 'test'});
    joinRoom();
    setMessage("Connected");
  };

  const onSocketDisconnect = async () => {
    // Socket disconnected
    console.log("Disconnected from socket server");
  };

  const joinRoom = async () => {
    socket.emit("joinRoom", { roomID: "1234" });
  };
  // const socket = io.connect("http://localhost", {port: 8000, transports: ["websocket"]});
  // Start listening for events
  // Socket connection successful
  socket.on("connect", onSocketConnected);
  // Socket disconnection
  socket.on("disconnect", onSocketDisconnect);
};

export default { createListeners };
