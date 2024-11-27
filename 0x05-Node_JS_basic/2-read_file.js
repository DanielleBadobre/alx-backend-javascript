const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');

    const studentData = lines.slice(1).map((line) => line.split(','));
    console.log(`Number of students: ${studentData.length}`);

    const fields = {};
    studentData.forEach((student) => {
      const field = student[3];
      const name = student[0];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(name);
    });

    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
