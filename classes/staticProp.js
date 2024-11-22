class User {
    constructor(username, id) {
        this.username = username
        this.id = id
    }
    static creatId() {
        console.log(`The id of ${this.username} is: ${this.id}`);
    }
}

const rohit = new User("devRohit", 1234)
console.log(rohit);
// rohit.creatId(); // can't access static

class admin extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}
const adminUser = new admin("iamadmin", "admin@yahoo.com")
// adminUser.creatId();
console.log(adminUser);
