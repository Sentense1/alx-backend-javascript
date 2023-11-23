const chai = require('chai');

const expect = chai.expect;

const calculateNumber = require('./1-calcul');

describe('Tests calculateNumbers function when type is SUM', function () {
  it('should round numbers and return their sum', function () {
    const output = calculateNumber('SUM', 23.3, 33.3);
    expect(output).to.equal(56);
  });

  it('should handle negative numbers', function () {
    const output = calculateNumber('SUM', -23.3, -33.3);
    expect(output).to.equal(-56);
  });

  it('should work with zero', function () {
    const output = calculateNumber('SUM', 0, 0);
    expect(output).to.equal(0);
  });

  it('it should return the sum of an integer and a float', function () {
    const output = calculateNumber('SUM', 23, 45.8);
    expect(output).to.equal(69);
  });
  it('it should handle two floats and an integer', function () {
    const output = calculateNumber('SUM', (2.5, 4.5), 4);
    expect(output).to.equal(9);
  });
  it('it shouild handle two integers', function () {
    const output = calculateNumber('SUM', 12, 12);
    expect(output).to.not.equal(56);
  });
});

describe('Tests calculateNumbers function when type is SUBTRACT', function () {
    it('should round numbers and return their difference', function () {
      const output = calculateNumber('SUBTRACT', 23.3, 33.3);
      expect(output).to.equal(-10);
    });
  
    it('should handle negative numbers', function () {
      const output = calculateNumber('SUBTRACT', -23.3, -33.3);
      expect(output).to.equal(10);
    });
  
    it('should work with zero', function () {
      const output = calculateNumber('SUBTRACT', 0, 0);
      expect(output).to.equal(0);
    });
  
    it('it should return the difference of an integer and a float', function () {
      const output = calculateNumber('SUBTRACT', 23, 45.8);
      expect(output).to.equal(-23);
    });
    it('it should handle two floats and an integer', function () {
      const output = calculateNumber('SUBTRACT', (2.5, 4.5), 4);
      expect(output).to.equal(1);
    });
    it('it shouild handle two integers', function () {
      const output = calculateNumber('SUBTRACT', 12, 12);
      expect(output).to.not.equal(56);
    });
  });

  describe('Tests calculateNumbers function when type is DIVIDE', function () {
    it('should round numbers and return their division', function () {
      const output = calculateNumber('DIVIDE', 23.3, 33.3);
      expect(output).to.equal(0.696969696969697)
    });
  
    it('should handle negative numbers', function () {
      const output = calculateNumber('DIVIDE', -5, -1);
      expect(output).to.equal(5);
    });
  
    it('should work with zero', function () {
      const output = calculateNumber('DIVIDE', 0, 0);
      expect(output).to.equal('Error');
    });
  
    it('it should return the division of an integer and a float', function () {
      const output = calculateNumber('DIVIDE',46, 23);
      expect(output).to.equal(2);
    });
    it('it should handle two floats and an integer', function () {
      const output = calculateNumber('DIVIDE', (2.5, 4.5), 5);
      expect(output).to.equal(1);
    });
    it('it shouild handle two integers', function () {
      const output = calculateNumber('DIVIDE', 12, 12);
      expect(output).to.not.equal(56);
    });
  });
