function doSum(index) {
    let ans = 0;
    for (let i = 0; i < index; i++) {
        ans += i;
    }
    return ans;
}
function callToSum() {
    console.log(doSum(100));
}
setTimeout(callToSum, 1000);
console.log("callToSum is already called");