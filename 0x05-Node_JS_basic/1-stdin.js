// Welcome message to be displayed to the user
const message1 = 'Welcome to Holberton School, what is your name?\n';
// Closing message to be displayed after user input
const message2 = 'This important software is now closing\n';

// Write the welcome message to the standard output (console)
process.stdout.write(message1);

// Listen for the 'readable' event on the standard input (keyboard)
process.stdin.on('readable', () => {
  // Read data from the standard input
  const name_ = process.stdin.read();

  // Check if data is not null (i.e., user entered something)
  if (name_ !== null) {
    // Write a message with the user's name to the standard output
    process.stdout.write(`Your name is: ${name_}`);
  }
});

// Listen for the 'end' event on the standard input (keyboard)
process.stdin.on('end', () => {
  // Write the closing message to the standard output
  process.stdout.write(message2);

  // Exit the process
  process.exit();
});
