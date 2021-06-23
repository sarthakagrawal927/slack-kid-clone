class Room {
  constructor(roomId, roomTitle, namsepcce, privateRoom = false) {
    this.roomId = roomId;
    this.roomTitle = roomTitle;
    this.namsepcce = namsepcce;
    this.privateRoom = privateRoom;
    this.history = [];
  }

  addMessage(message) {
    this.history.push(message);
  }

  clearHistory() {
    this.history = [];
  }
}

module.exports = Room;
