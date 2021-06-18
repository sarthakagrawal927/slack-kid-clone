const express = require("express");
const socketio = require("socket.io");
const app = express();

var server = app.listen(8000, () => {
  console.log("success");
});

const io = socketio(server, { cors: { origin: "*" } });

io.on("connection", (socket, req) => {
  socket.emit("welcome", "welcome to  websocket server");
  socket.on("message", (msg) => {
    console.log(msg);
  });
});
