const readlineSync = require("readline-sync");
let name = readlineSync.question('May I have your name? ');
console.log(`Name  ${name}!`);
let salary = readlineSync.question('May I have your Salary ');
console.log(`Salary ${salary}!`);

let age = readlineSync.question('May I have your age? ');
console.log(`age  ${age}!`);

console.log('UR Info '+ name + " : "+ salary+" : "+ age);
