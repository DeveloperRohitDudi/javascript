const users = {
    name: "thomas",
    username: "peakyblinder",
    isLoggenIn: true,
    email: "peaky@yahoo.com",
    printData: function () {
        console.log(`username: ${this.username}`);

    }
}
console.log(`username of: `, users.name);
console.log(users.printData());

