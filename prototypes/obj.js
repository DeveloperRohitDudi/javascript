function square(num) {
    return num * 2
}

square.num2 = 10;
console.log(square(3));
console.log(square.num2);
console.log(square.prototype);


// injecting a prototype into function
let defaultSpeed = 100
function setSpeed(velocity) {
    this.velocity = velocity;
}

setSpeed.prototype.printSpeed = function (name) {
    console.log(`the speed of ${name} is: `, this.velocity);
}

const car = new setSpeed(80);
const truck = new setSpeed(50)
car.printSpeed("car")
truck.printSpeed("truck")

// now printSpeed is the method of a function 


















