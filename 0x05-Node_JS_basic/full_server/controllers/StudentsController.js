const express = require('express');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DATABASE = args[0];

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');import readDatabase from '../utils';

  class StudentsController {
    static getAllStudents(request, response, DATABASE) {
      readDatabase(DATABASE)
        .then((fields) => {
          const students = [];
          let msg;
  
          students.push('This is the list of our students');
  
          for (const key of Object.keys(fields)) {
            msg = `Number of students in ${key}: ${
              fields[key].length
            }. List: ${fields[key].join(', ')}`;
  
            students.push(msg);
          }
          response.send(200, `${students.join('\n')}`);
        })
        .catch(() => {
          response.send(500, 'Cannot load the database');
        });
    }
  
    static getAllStudentsByMajor(request, response, DATABASE) {
      const { major } = request.params;
  
      if (major !== 'CS' && major !== 'SWE') {
        response.send(500, 'Major parameter must be CS or SWE');
      } else {
        readDatabase(DATABASE)
          .then((fields) => {
            const students = fields[major];
  
            response.send(200, `List: ${students.join(', ')}`);
          })
          .catch(() => response.send(500, 'Cannot load the database'));
      }
    }
  }
  
  export default StudentsController;
});

app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    const students = await countStudents(DATABASE);
    res.send(`${msg}${students.join('\n')}`);
  } catch (error) {
    res.send(`${msg}${error.message}`);
  }
});

app.listen(port, () => {
});

module.exports = app;
