function doSum(a, b, funcToCall) {
    let sum = a + b;
    funcToCall(sum);
}
function displayResult(data) {
    console.log("the sum is: " + data);
}

const num1 = 2, num2 = 3;
let ans = doSum(num1, num2, displayResult);