
function busyFunc() {
    let ans = 0;
    console.log("fucking busy function is called");
    for (let i = 0; i < 1000000; i++) {
        ans++;
    }
    console.log("i'm the fucking output: " + ans);
}
busyFunc();
console.log("the fucking output will print now"); // but this is working synchroneously