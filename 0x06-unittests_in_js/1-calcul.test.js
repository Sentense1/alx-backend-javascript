const assert = require('assert');

const calculateNumber = require('./1-calcul');

describe('Tests calculateNumbers function when type is SUM', function () {
  it('should round numbers and return their sum', function () {
    const output = calculateNumber('SUM', 23.3, 33.3);
    assert.strictEqual(output, 56);
  });

  it('should handle negative numbers', function () {
    const output = calculateNumber('SUM', -23.3, -33.3);
    assert.strictEqual(output, -56)
  });

  it('should work with zero', function () {
    const output = calculateNumber('SUM', 0, 0);
    assert.strictEqual(output, 0);
  });

  it('it should return the sum of an integer and a float', function () {
    const output = calculateNumber('SUM', 23, 45.8);
    assert.strictEqual(output, 69);
  });
  it('it should handle two floats and an integer', function () {
    const output = calculateNumber('SUM', (2.5, 4.5), 4);
    assert.strictEqual(output, 9)
  });
  it('it shouild handle two integers', function () {
    const output = calculateNumber('SUM', 12, 12);
    assert.notStrictEqual(output, 23);
  });
});

describe('Tests calculateNumbers function when type is SUBTRACT', function () {
    it('should round numbers and return their difference', function () {
      const output = calculateNumber('SUBTRACT', 23.3, 33.3);
      assert.strictEqual(output, -10);
    });
  
    it('should handle negative numbers', function () {
      const output = calculateNumber('SUBTRACT', -23.3, -33.3);
      assert.strictEqual(output, 10)
    });
  
    it('should work with zero', function () {
      const output = calculateNumber('SUBTRACT', 0, 0);
      assert.strictEqual(output, 0);
    });
  
    it('it should return the difference of an integer and a float', function () {
      const output = calculateNumber('SUBTRACT', 23, 45.8);
      assert.strictEqual(output, -23);
    });
    it('it should handle two floats and an integer', function () {
      const output = calculateNumber('SUBTRACT', (2.5, 4.5), 4);
      assert.strictEqual(output, 1)
    });
    it('it shouild handle two integers', function () {
      const output = calculateNumber('SUBTRACT', 12, 12);
      assert.notStrictEqual(output, 1);
    });
  });

  describe('Tests calculateNumbers function when type is DIVIDE', function () {
    it('should round numbers and return their division', function () {
      const output = calculateNumber('DIVIDE', 23.3, 33.3);
      assert.strictEqual(output, 0.696969696969697);
    });
  
    it('should handle negative numbers', function () {
      const output = calculateNumber('DIVIDE', -5, -1);
      assert.strictEqual(output, 5)
    });
  
    it('should work with zero', function () {
      const output = calculateNumber('DIVIDE', 0, 0);
      assert.strictEqual(output, 'Error');
    });
  
    it('it should return the division of an integer and a float', function () {
      const output = calculateNumber('DIVIDE',46, 23);
      assert.strictEqual(output, 2);
    });
    it('it should handle two floats and an integer', function () {
      const output = calculateNumber('DIVIDE', (2.5, 4.5), 5);
      assert.strictEqual(output, 1)
    });
    it('it shouild handle two integers', function () {
      const output = calculateNumber('DIVIDE', 12, 12);
      assert.notStrictEqual(output, 0);
    });
  });
