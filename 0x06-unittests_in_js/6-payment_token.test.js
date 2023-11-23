const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with the correct data when success is true', function (done) {
    // Call the async function
    getPaymentTokenFromAPI(true).then((result) => {
      // Verify the result
      assert.deepStrictEqual(result, { data: 'Successful response from the API' });
      done(); // Call done to indicate the test is complete
    });
  });

  it('should not resolve when success is false', function (done) {
    // Call the async function
    getPaymentTokenFromAPI(false).then((result) => {
      // Verify that result is undefined (nothing resolved)
      assert.strictEqual(result, undefined);
      done(); // Call done to indicate the test is complete
    });
  });

  // Add more test cases as needed
});
