let inputUsername = "developerRohitDudi";
// async function getUserData(username) {
//     try {
//         const respone = await fetch("https://api.github.com/users/" + username);
//         const data = await respone.json();
//         console.log(data);

//     } catch (error) {
//         console.log(error, "error detected.");
//     }
// }
// getUserData(inputUsername);


fetch("https://api.github.com/users/" + inputUsername)
    .then((response) => {
        return response.json();
    })
    .then((dataInJson) => {
        console.log(dataInJson);
    })
    .catch((error) => {
        console.log(error);
    })

