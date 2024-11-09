function printTime() {
    console.log(new Date().getHours());
    console.log(new Date().getMinutes());
    console.log(new Date().getSeconds());

}
setInterval(printTime, 1000);