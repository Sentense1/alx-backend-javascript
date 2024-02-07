const fs = require('fs');
const path = require('path');

async function countStudents(Path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(Path), 'utf-8', (error, data) => {
      if (error || !fs.existsSync(path.join(Path))) {
        reject(new Error('Cannot load the database'));
        return;
      }
      
      const fileData = data.split('\n').filter((line) => line !== '');

      const csStudents = fileData.filter((line) => {
        const elements = line.split(',');
        return elements.length >=4 && elements[3].trim() === 'CS';
      });

      const sweStudents = fileData.filter((line) => line.split(',')[3].trim() === 'SWE');

      const csFirstN = csStudents.map((line) => line.split(',')[0].trim()).join(', ');
      const sweFirstN = sweStudents.map((line) => line.split(',')[0].trim()).join(', ');

      const studentNumber = fileData.length - 1;
      const csNumber = csStudents.length;
      const sweNumber = sweStudents.length;

      const msg1 = `Number of students: ${studentNumber}`;
      const msg2 = `Number of students in CS: ${csNumber}. List: ${csFirstN}`;
      const msg3 = `Number of students in SWE: ${sweNumber}. List: ${sweFirstN}`;
      const msg = `${msg1}\n${msg2}\n${msg3}`;
      console.log(msg);
      resolve(msg);
    });
    
  });
}

if (require.main === module) {
  countStudents("database.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
  console.log("After!");
}

module.exports = countStudents;
