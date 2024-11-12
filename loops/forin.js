const addresses = {
    sam: "america",
    boromir: "Ireland",
    aragorn: "United Kingdom",
    victoria: "Australia"
}

for (const key in addresses) {
    console.log(key, " is from ", addresses[key]);
}

const numList = [12435, 345698, 785476, 76890];
for (const val in numList) {
    console.log(numList[val]);
}