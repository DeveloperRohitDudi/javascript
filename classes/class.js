class spaceship {
    constructor(fuel, speed, distance, name) {
        this.fuel = fuel;
        this.speed = speed;
        this.distance = distance;
        this.name = name;
    }
    static printMessage() { // not associated by object can be directly called from outside the class
        console.log("static method is called");

    }
    printDetails() { // 
        console.log("the speed of " + this.name + " is " + this.speed);
    }
}
let jupiter1 = new spaceship(85.80, 9999, "1230 in light years", "jupiter1");
let jupiter2 = new spaceship(75.80, 8788, "1432 in light years", "jupiter2");
jupiter1.printDetails();
spaceship.printMessage();