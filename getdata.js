const fs = require('fs');

console.log("Enter your name:");
const name = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
}).question('', (name) => {
  fs.writeFileSync('user-data.txt', name);
  console.log(`Saved: ${fs.readFileSync('user-data.txt', 'utf8')}`);
  process.exit();
});