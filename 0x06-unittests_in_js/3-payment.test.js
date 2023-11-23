const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with correct arguments', function () {
    // Create a spy on Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify that Utils.calculateNumber was called with the correct arguments
    sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);

    // Restore the spy
    calculateNumberSpy.restore();
  });

  it('should log the correct message to the console', function () {
    // Create a spy on console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called with the correct message
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');

    // Restore the spy
    consoleLogSpy.restore();
  });
});
