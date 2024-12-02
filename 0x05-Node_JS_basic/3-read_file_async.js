const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      if (lines.length < 2) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const header = lines[0].split(',');
      const studentData = lines.slice(1);

      const studentsByField = {};

      studentData.forEach((line) => {
        const values = line.split(',');
        if (values.length === header.length) {
          const field = values[3];
          const firstname = values[0];

          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstname);
        }
      });

      const totalStudents = Object.values(studentsByField)
        .reduce((acc, arr) => acc + arr.length, 0);
      console.log(`Number of students: ${totalStudents}`);

      Object.entries(studentsByField).forEach(([field, names]) => {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
