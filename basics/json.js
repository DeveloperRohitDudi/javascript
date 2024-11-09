// passing js objects to json as strings
// JSON.parse()
// JSON.stringify()
let users = {
    "username": "developer",
    "emial": "new@yahoo.com"
}
// let finalData = JSON.parse(users); // uses string
let finalData = JSON.stringify(users);

console.log(finalData);
