// Create a WeakMap to track the number of times queryAPI is called for each endpoint
export const weakMap = new WeakMap();

// Create a function named queryAPI
export function queryAPI(endpoint) {
  // Initialize the count for the endpoint to 0 if not already tracked
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Get the current count for the endpoint
  const count = weakMap.get(endpoint);

  // Increment the count for the endpoint
  weakMap.set(endpoint, count + 1);

  // Check if the number of queries is >= 5, throw an error if so
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Simulate making an API request here
  // You can replace this with your actual API request logic
  console.log(`Calling API endpoint: ${endpoint.protocol}://${endpoint.name}`);

  // Return the result of the API request (replace with actual result)
  return `Result for ${endpoint.name}`;
}
