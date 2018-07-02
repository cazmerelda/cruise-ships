function Ship() {
  this.startingPort = 'Liverpool';
}

Ship.prototype.setSail = function setSail() {
  this.startingPort = null;
};
module.exports = Ship;
