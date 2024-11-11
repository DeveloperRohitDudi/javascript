const users = {
    username: "developer",
    emial: "dev@yahoo.com",
    greet: function () {
        console.log(`Hello `, this.username, ` welcome to yahoo!`);
    }
}
users.greet();

// arrow func syntax
// const calc = (num1, num2) => {
//     return num1 + num2;
// }
// implicit return
const calc = (num1, num2) => num1 * num2;
console.log(calc(2, 5));
// return of an object by implicit return in arrow function

const returnObj = (message) => ({ message: "i'm the fucking object " + message })
console.log(returnObj("i do nothing"));

