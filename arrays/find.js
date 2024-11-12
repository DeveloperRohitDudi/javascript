let firstList = [1, 2, 3, 4];
let secondList = [5, 6, 7];
const fullList = firstList.concat(secondList);
console.log(fullList);


// concat alternative for multiple arrays
// let allArrays = [...firstList, ...secondList, ...fullList];
// console.log(`all arrays are: `, allArrays);

// fixing the terrible array
let terribleArr = [1, 2, 3, [4, 5], 6[5, 4, 9, [7, 8]], 0];
let num1 = 100, num2 = 110, num3 = 120;
console.log(Array.isArray("rohit"));
console.log(Array.from("rohit"));
console.log(Array.of(num1, num2, num3));
