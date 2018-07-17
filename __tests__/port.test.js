const Port = require('../src/Port');
const Itinerary = require('../src/itinerary');

describe('Port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
});

describe('Itinerary', () => {
  it('can have ports', () => {
    const liverpool = new Port('Liverpool');
    const calais = new Port('Calais');

    const itinerary = new Itinerary([liverpool, calais]);

    expect(itinerary.ports).toEqual([liverpool, calais]);

  });
});

describe('addShip', () => {
  it('can add a ship', () => {
    const port = new Port('Liverpool');
    const ship = {};

    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });
});

describe('removeShip', () => {
  it('can remove a ship', () => {
    const port = new Port('Liverpool');
    const titanic = {};
    const queenMary = {};

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  });
});
