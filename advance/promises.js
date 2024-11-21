const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task done");
        resolve();
    }, 1000)
})

promiseOne.then(function () {
    console.log("the fucking promise is consumed");
})

// 
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task 2 is done");
        resolve();
    }, 1000)
}).then(function () {
    console.log("promise 2 consumed");

})

const promiseThree = new Promise(function (resolve, rejct) {
    setTimeout(function () {
        console.log("called for user data done.");
        resolve({ username: "newuser", email: "new@yahoo.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user.email, user.username);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = false;
        let ErrName = "undefined";
        if (!err) {
            resolve({ user: "Alfred", email: "al@yahoo.com" })
        }
        else {
            reject(`ERROR: ${ErrName} error detected`)
        }
    }, 1000)
})

promiseFour.then((username) => {
    console.log(username.user);
    return username.user;  // this is returning to next .then()
}).then((user) => {
    console.log(user);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("finally the promise is either resolved or not. good sentence");
})


// handle errors using async await
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true;
        let ErrName = "dataNotFound";
        if (!err) {
            resolve({ user: "aragorn", email: "al@yahoo.com" })
        }
        else {
            reject(`ERROR: ${ErrName} error detected`)
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);

    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();