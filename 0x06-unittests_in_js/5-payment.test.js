const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let consoleLogSpy;

  beforeEach(function () {
    // Create a spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the spy after each test
    consoleLogSpy.restore();
  });

  it('should log the correct message for totalAmount 100 and totalShipping 20', function () {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called with the correct message
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');

    // Verify that console.log was only called once
    sinon.assert.calledOnce(consoleLogSpy);
  });

  it('should log the correct message for totalAmount 10 and totalShipping 10', function () {
    // Call the function
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log was called with the correct message
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 20');

    // Verify that console.log was only called once
    sinon.assert.calledOnce(consoleLogSpy);
  });
});
