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
