const Ship = require('../src/ship');

const Port = require('../src/Port.js');

const Itinerary = require('../src/itinerary');

describe('Ship', () => {
  it('can be instantiated', () => {
    const port = new Port('Liverpool');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });
});

describe('Ship', () => {
  it('sets the current port property', () => {
    const port = new Port('Liverpool');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toBe(port);
  });
});

describe('setSail', () => {
  it('allows the ship to set sail from the current port', () => {
    const liverpool = new Port('Liverpool');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([liverpool, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
});

describe('dock', () => {
  it('allows the ship to dock at a different port', () => {
    const liverpool = new Port('Liverpool');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([liverpool, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
  });
});

describe('ship', () => {
  it('cannot sail further than its itinerary', () => {
    const liverpool = new Port('Liverpool');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([liverpool, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });
});
