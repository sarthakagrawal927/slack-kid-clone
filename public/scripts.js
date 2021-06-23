const socket = io("http://localhost:8000");
const socket2 = io("http://localhost:8000/admin");
//client has no idea about room, its just UI and server. It just knows about the server
socket.on("messageFromServer", (dataFromServer) => {
  console.log(dataFromServer);
  socket.emit("messageToServer", {
    data: "Hi from client",
  });
});

socket.on("joined", (msg) => {
  console.log(msg);
});

socket2.on("welcome", (dataFromServer) => {
  console.log(dataFromServer);
});

document.querySelector("#message-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const newMessage = document.querySelector("#user-message").value;
  socket.emit("newMessageToServer", { text: newMessage });
});
