const express = require("express");
const socketio = require("socket.io");
const app = express();

app.use(express.static(__dirname + "/public"));

var server = app.listen(8000);

const io = socketio(server, { cors: { origin: "*" } });

io.of("/").on("connection", (socket, req) => {
  socket.emit("messageFromServer", "Hi from Server");
  socket.on("messageToServer", (dataFromClient) => {
    // console.log(dataFromClient);
  });

  socket.on("newMessageToServer", (msg) => {
    io.emit("messageToClients", { text: msg.text });
  });
});

io.of("/admin").on("connection", (socket) => {
  console.log("connected to admin");
  io.of("/admin").emit("welcome", "Welcome to admin");
});
