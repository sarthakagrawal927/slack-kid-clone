const express = require("express");
const socketio = require("socket.io");
const app = express();

let namespaces = require("./data/namespaces");
console.log(namespaces);

app.use(express.static(__dirname + "/public"));

const server = app.listen(8000);
const io = socketio(server, { cors: { origin: "*" } });

io.on("connection", (socket, req) => {
  socket.emit("messageFromServer", "Hi from Server");
  socket.on("messageToServer", (dataFromClient) => {
    console.log(dataFromClient);
  });

  socket.join("level1");
  socket.to("level1").emit("joined", `${socket.id} says I joined level 1 room`);
});

io.of("/admin").on("connection", (socket) => {
  console.log("connected to admin");
  io.of("/admin").emit("welcome", "Welcome to admin");
});
