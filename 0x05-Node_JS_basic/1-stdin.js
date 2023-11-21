// Define welcome message with a newline at the end
const message1 = 'Welcome to Holberton School, what is your name?\n';
// Define closing message
const message2 = 'This important software is now closing';

// Import the 'readline' module
const readline = require('readline');

// Create an interface to read input from the user
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Get user input
reader.question(message1, (name) => {
  // Log the user's name
  console.log('Your name is: ', name);
  // Log the closing message
  console.log(message2);
  // Close the reader interface
  reader.close();
});
