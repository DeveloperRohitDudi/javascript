const fullForm = new Map();
fullForm.set("BCA", "bachelors of computer application")
fullForm.set("MCA", "masters of computer application")
fullForm.set("B.Tech", "bachelors of Technology")
fullForm.set("M.Tech", "Masters of Technology")

// console.log(fullForm);

for (const [key, val] of fullForm) {
    console.log(key, ': ', val);

}