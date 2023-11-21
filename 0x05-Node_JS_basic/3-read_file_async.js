const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        // Split the content into lines and filter out empty lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        // Log the total number of students
        console.log(`Number of students: ${lines.length - 1}`);

        // Count the number of students in the 'CS' field
        const csStudents = lines.filter((line) => line.split(',')[3].trim().toUpperCase() === 'CS');
        // Retrieve the first names of students in CS field
        const firstN = csStudents.map((line) => line.split(',')[0]).join(', ');
        const message1 = `Number of students in CS: ${csStudents.length}. List: ${firstN}`;
        console.log(message1);
        // Count the number of students in the 'SWE' field
        const sweStudents = lines.filter((line) => line.split(',')[3].trim().toUpperCase() === 'SWE');
        // Retrieve the first names of students in SWE field
        const firstNswe = sweStudents.map((line) => line.split(',')[0]).join(', ');
        const message2 = `Number of students in SWE: ${sweStudents.length}. List: ${firstNswe}`;
        console.log(message2);
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
