let users = [{
    firstName: "alex",
    gender: "male",
    metadata: {
        email: "alex@gmail.com",
        isMarried: false
    }
},
{
    firstName: "richard",
    gender: "male"
},
{
    firstName: "thomas",
    gender: "male"
}]
let totalIndex = users.length;
for (let i = 0; i < totalIndex; i++) {
    if (users[i]["gender"] == "male") {
        console.log(users[i]["firstName"]);

    }
}