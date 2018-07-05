const Ship = require('../src/ship');

const Port = require('../src/Port.js');

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});

describe('Ship', () => {
  it('sets the current port property', () => {
    const port = new Port('Liverpool');
    const ship = new Ship(port);
    expect(ship.currentPort).toBe(port);
  });
});

describe('setSail', () => {
  it('allows the ship to set sail from the current port', () => {
    const port = new Port('Liverpool');
    const ship = new Ship(port);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
});

describe('dock', () => {
  it('allows the ship to dock at a different port', () => {
    const liverpool = new Port('Liverpool');
    const ship = new Ship(liverpool);
    const calais = new Port('Calais');
    ship.dock(calais);
    expect(ship.currentPort).toEqual(calais);
  });
});
