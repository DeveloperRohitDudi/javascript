function notify(message) {
    console.log(message);
}
function PrintResult() {
    console.log("ignition seccess, now flight is on autopilot mode.");

}
let message = "Welcome, ignition will start in 5 seconds..."
notify(message);

setTimeout(PrintResult, 5 * 1000);


// function fuelLevel(fuel) {
//     fuel--;
//     console.log(fuel);
// };
// console.log("live fuel level indication: ");
// let fuel = 1000;
// setInterval(fuelLevel, 2 * 1000);

