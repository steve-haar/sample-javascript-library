const greeting = require('./index');

describe('greeting', () => {
  it('greets you by name', () => {
    const message = greeting('Steve');
    expect(message).toBe('Hello, Steve.');
  });
});
