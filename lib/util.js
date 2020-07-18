const firstname = require('./name/firstname');
const lastname = require('./name/lastname');

function random(array) {
    if (array.length < 1) {
        return "No array to random"
    }
    let arrayLength = array.length;
    let randomKey = Math.floor(Math.random() * arrayLength);

    return array[randomKey];
}


function getRandomName() {
    let randomFirstName = random(firstname);
    let randomLastName = random(lastname);
    let randomName = `${randomFirstName} ${randomLastName}`;
    return randomName;
}

function getRandomFirstname() {

    let randomFirstname = random(firstname);
    return randomFirstname;
}

function getRandomLastname() {
    let randomLastname = random(lastname);
    return randomLastname;
}

let methods = {};
methods.getRandomName = getRandomName;
methods.getRandomFirstname = getRandomFirstname;
methods.getRandomLastname = getRandomLastname;


module.exports = methods;

