function user(username, loginCount, isLoggenIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggenIn = isLoggenIn

    this.greeting = function () {
        console.log(`welcome ${this.username}`);
    }
    return this;
}

const userData = new user("peaky", 5, false);  // new calls a constructor implicitly
const userData2 = new user("hannah", 5, true); // invoked and override done
// const userData2 = user("hannah", 5, true); // invoked and override done
console.log(`user data: `, userData.username, userData.loginCount, userData.isLoggenIn);
console.log(`user 2 data: `, userData2.username, userData2.loginCount, userData2.isLoggenIn);
