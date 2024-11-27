/**
 * executed through command line:
 * display the message Welcome to Holberton School, what is your name?
 * user input their name on a new line
 * display Your name is: INPUT
 * When the user ends the program, display This important software is now closing
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  process.stdout.write(`Your name is: ${name}`);
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
