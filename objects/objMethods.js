function objMethods(obj) {
    console.log("original object: " + obj);

    let keys = Object.keys(obj);
    console.log("keys of object: " + keys);

    let values = Object.values(obj);
    console.log("values of object: " + values);

    let hasProp = Object.hasOwnProperty(obj);
    console.log("properties of object: " + hasProp);

    let entries = Object.entries(obj);
    console.log("entries of object: " + entries);

}

let testObj = {
    key1: "alex",
    key2: "yahoo",
}
objMethods(testObj);

console.log(testObj.hasOwnProperty("name"));
let obj2 = Object.assign({}, testObj, { key3: "extra to merge" });
console.log(obj2);
