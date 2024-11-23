class User {
    constructor(username, password, email) {
        this.username = username
        this.password = password
        this.email = email
    }

    get email() {
        return `this is your fucking email: ${this._email} keep this secure.`
    }
    set email(value) {
        this._email = value;
    }
    get password() {
        return `abc${this._password}123`;
    }
    set password(value) {
        this._password = value
    }
}
const sam = new User("sam", 1234, "sam@yahoo.com");

console.log(sam.password);
console.log(sam.email);
