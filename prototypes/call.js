function setUsername(username) {
    this.username = username
    console.log("i have the current execution context of user function");
}
function setUser(name, username, email) {
    setUsername.call(this, username)     // i'm giving my crrent execution context to setUsername func
    this.email = email
    this.name = name
}

const sam = new setUser("sam", "samsam", "sam@yahoo.com")
console.log(sam);
