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

describe('setSail', ()=> {
  it('allows the ship to set sail from the starting port', () => {
    const ship = new Ship('Liverpool');
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  });
});
