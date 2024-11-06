let a = 0
function getSum() {
    for (let i = 0; i < 100000; i++)
        a += i;
}
const beforeRun = new Date();
const beforeTimeInMS = beforeRun.getTime();

getSum();
const afterRun = new Date();
const afterTimeInMS = afterRun.getTime();
console.log(afterTimeInMS - beforeTimeInMS);