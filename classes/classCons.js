class user {
    constructor(name, username, password) {
        this.name = name;
        this.username = username
        this.password = password
    }

    encryptPassword() {
        return `123${this.password}abc`
    }
}

const aragorn = new user("aragorn", "aragornking", "P@s$w0rd");
console.log(aragorn.encryptPassword());
