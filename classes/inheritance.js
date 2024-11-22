class User {
    constructor(username) {
        this.username = username;
    }
    printMe() {
        console.log("username is: ", this.username);
    }
}
class employee extends User {
    constructor(username, email, position) {
        super(username)
        this.email = email
        this.position = position
    }
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}
const sam = new employee("sam", "sam@yahoo.com", "admin")
console.log(sam);
sam.addCourse();
const frodo = new employee("frodobegins")
frodo.printMe()

console.log(frodo instanceof User);
