const fs = require("fs");

fs.readFileSync("a.txt", "utf-8", function (err, data) {
    console.log(data);
})


console.log("hi there");

