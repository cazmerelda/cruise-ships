const Itinerary = require('../src/itinerary');

const Port = require('../src/Port');

describe('Itinerary', () => {
  it('can be instantiated', () => {

    expect(new Itinerary()).toBeInstanceOf(Object);
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
