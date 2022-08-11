const readline = require('readline-sync');
const numberModel = /^\+44\d{10}$/;
console.log('Enter a phone number:');
getNumber();

function getNumber() {
    let number =readline.prompt();
    compareIfValid(number);
}


function compareIfValid(phoneNumber){
if (phoneNumber.match(numberModel)) {
    console.log('valid phone number');
} else {
    console.log('Invalid number!!! Please enter again!');
    getNumber();
}
}