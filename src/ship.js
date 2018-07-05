function Ship(port) {
  this.currentPort = port;
}

Ship.prototype.setSail = function setSail() {
  this.currentPort = null;
};

Ship.prototype.dock = function dock() {
  this.currentPort = this.currentPort;
};

module.exports = Ship;
