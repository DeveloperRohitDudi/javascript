const peoples = ["james", "finn", "michiel", "alex"];
const genderList = ["female", "male", "female", "male"];

const totalUsers = peoples.length;
console.log("list of males is:");

for (let i = 0; i < totalUsers; i++) {
    if (genderList[i] == "male") {
        console.log(peoples[i]);
    }
}