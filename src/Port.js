function Port() {
  this.currentPort = 'Liverpool';
  this.ships = [];
}

Port.prototype.addShip = function addShip(ship) {
  this.ships.push(ship);
};
module.exports = Port;

Port.prototype.removeShip = function removeShip(ship) {
  this.ships.pop(ship);
};
