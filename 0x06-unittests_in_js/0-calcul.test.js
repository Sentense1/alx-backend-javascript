const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('Tests calculateNumbers function', function () {
  it('should round numbers and return their sum', function () {
    const output = calculateNumber(23.3, 33.3);
    assert.strictEqual(output, 56);
  });

  it('should handle negative numbers', function () {
    const output = calculateNumber(-23.3, -33.3);
    assert.strictEqual(output, -56)
  });

  it('should work with zero', function () {
    const output = calculateNumber(0, 0);
    assert.strictEqual(output, 0);
  });

  it('it should return the sum of an integer and a float', function () {
    const output = calculateNumber(23, 45.8);
    assert.strictEqual(output, 69);
  });
  it('it should handle two floats and an integer', function () {
    const output = calculateNumber((2.5, 4.5), 4);
    assert.strictEqual(output, 9)
  });
  it('it shouild handle two integers', function () {
    const output = calculateNumber(12, 12);
    assert.notStrictEqual(output, 23);
  });
});
