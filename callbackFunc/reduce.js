const nums = [1, 2, 3, 4, 5, 6];

// the accumulator store initial value that we give, and from second iteration it stores the return value

// const result = nums.reduce((acc, curr) => {
//     console.log(`acc: `, acc, ` curr: `, curr)
//     return acc + curr
// }, 0)

const result = nums.reduce((acc, curr) => (acc + curr), 0);
console.log(result);
