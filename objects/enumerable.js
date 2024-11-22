const myObj = {
    name: "boromir",
    email: "bor@yahooo.com",
    location: "australia",
    printData: function () {
        console.log("Here is the data");
    }
}

for (let [key, value] of Object.entries(myObj)) {  /// now itarable 
    if (typeof value != "function") {
        console.log(key, value);
    }
}

console.log(Object.getOwnPropertyDescriptor(myObj, "location"));

// disable properties
Object.defineProperty(myObj, "location", {
    writable: false,
    enumerable: false,
})


console.log(Object.getOwnPropertyDescriptor(myObj, "location"));

for (let [key, value] of Object.entries(myObj)) {  /// now not itarable 
    if (typeof value != "function") {
        console.log(key, value);
    }
}