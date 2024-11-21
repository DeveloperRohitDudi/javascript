// injecting a method "truelength" in String Global Object

const channelName = "RohitDudi    "
const username = "DeveloperRohitDudi   "

String.prototype.trueLength = function () {
    console.log(`the true length of "${this}" is: ${this.trim().length}`);
}

channelName.trueLength();
username.trueLength();