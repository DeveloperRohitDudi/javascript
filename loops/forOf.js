const arr = [1, 2, 3, 4, 5, 6];
for (const index of arr) {
    console.log(index);

}

const value = "Hello world!"
for (const val of value) {
    if (val == " ") {
        continue;
    }
    console.log(val);
}