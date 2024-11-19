// rest operator of functions
function calculateCartPrice(...nums) {
    return nums;
}
console.log(`The total price is: `, calculateCartPrice(142, 126, 292));


// passing object as argument
const data = {
    username: "boromir",
    email: "boromir@yahoo.com"
}
function printUserId(anObject) {
    console.log(`the username is: `, anObject.username, ` and the email of this user is: `, anObject.email);
}
printUserId(data);