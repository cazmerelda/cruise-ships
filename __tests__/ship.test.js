const Ship = require('../src/ship');

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});

describe('Ship', () => {
  it('sets the starting port property', () => {
    const ship = new Ship('Liverpool');
    expect(ship.startingPort).toBe('Liverpool');
  });
});
