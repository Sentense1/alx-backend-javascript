const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should stub Utils.calculateNumber and log the correct message', function () {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Create a spy on console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify that Utils.calculateNumber was called with the correct arguments
    sinon.assert.calledWithExactly(calculateNumberStub, 'SUM', 100, 20);

    // Verify that console.log was called with the correct message
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 10');

    // Restore the stub and the spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
