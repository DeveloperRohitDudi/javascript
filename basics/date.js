const { log } = require("console");

let currentDate = new Date();
console.log(currentDate.getDay());
console.log(currentDate.getDate());
console.log(currentDate.getFullYear());

// console.log(currentDate);
// console.log(currentDate.toString());
// console.log(currentDate.toDateString());
// console.log(currentDate.toLocaleString());

const customDate = new Date(2001, 0, 20);
console.log(customDate.toDateString());

const myTimeStamp = Date.now();
console.log(`time stamp value in MS: `, myTimeStamp);
console.log(`date value in MS: `, currentDate.getTime());
console.log(`date value in seconds: `, Math.floor(Date.now() / 1000));

