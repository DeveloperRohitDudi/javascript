const flightList = ["Oslo", "Stockholm", "Los angelas", "kiev", "Solicon Valley"];

flightList.forEach((name, index, arr) => { // doesn't return values
    console.log(name, index, arr);
})

flightList.forEach(display);

function display(name) {
    console.log(name);
}

// forEach on array of Objects
const userList = [
    {
        username: "developer1",
        email: "dev1@yahoo.com"
    },
    {
        username: "developer2",
        email: "dev2@yahoo.com"
    },
    {
        username: "developer3",
        email: "dev3@yahoo.com"
    }
]
// print all users email addresses from array of objects
userList.forEach((obj) => {
    console.log(obj.email);
})