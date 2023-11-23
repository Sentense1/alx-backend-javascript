function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({ data: 'Successful response from the API' });
      } else {
        // If success is false, do nothing
        resolve(); // You can also use reject() if you want to simulate an error
      }
    });
  }
  
  module.exports = getPaymentTokenFromAPI;
