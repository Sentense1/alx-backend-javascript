const fs = require('fs');

function countStudents(path) {
  let result;
  try {
    // Read the file content synchronously
    result = fs.readFileSync(path, 'utf8');
  } catch (error) {
    // If an error occurs while reading the file, throw a new error
    throw new Error('Cannot load the database');
  }
  // Check if the result is not null or undefined
  if (result !== null && result !== undefined) {
    // Split the content into lines and filter out empty lines
    const lines = result.split('\n').filter((line) => line.trim() !== '');
    // Log the total number of students
    console.log(`Number of students: ${lines.length - 1}`);

    // Count the number of students in the 'CS' field
    const csStudents = lines.filter((line) => line.split(',')[3].trim().toUpperCase() === 'CS');
    // Retrieve the first names of students in CS field
    const firstN = csStudents.map((line) => line.split(',')[0]).join(', ');
    console.log(`Number of students in CS: ${csStudents.length}. List: ${firstN}`);

    // Count the number of students in the 'SWE' field
    const sweStudents = lines.filter((line) => line.split(',')[3].trim().toUpperCase() === 'SWE');
    // Retrieve the first names of students in SWE field
    const firstNswe = sweStudents.map((line) => line.split(',')[0]).join(', ');
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${firstNswe}`);
  }
}

module.exports = countStudents;
