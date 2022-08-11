const fs = require('fs')
const readline = require('readline-sync');
let inputFile = fs.readFileSync('C:\\Users\\bharam\\Downloads\\test.txt', { encoding: 'utf8' });


//console.log(inputFile);


//checking the number of times @softwire.com has appeared
function countNumberOfIds(inputText) {
    let counter = 0;
    for (let i = 0; i < inputText.length; i++) {
        if ((inputText.substring(i, i + 13) == '@softwire.com')) {
            counter++;
        }
    }
    return counter;
}

function countNumberOfEmailIds(inputText) {
    return inputText.length;

}

let countId = countNumberOfIds(inputFile);

console.log(`No. of email ids present with @softwire.com: ${countId}`);

let softwireEmailId = inputFile.match(/(@softwire.com)/g);
let countWithReg = countNumberOfEmailIds(softwireEmailId);
console.log(`No. of email ids present with @softwire.com: ${countWithReg}`);

//console.log(softwireEmailId);

//counting the number of times any email id has appeared

let emailIdMatch = inputFile.match(/@[A-Za-z0-9]+.[A-Za-z.]+(?=\s)/g);
//console.log(emailIdMatch);
let countNoOfIds = countNumberOfEmailIds(emailIdMatch);
console.log(`No. of email ids present : ${countNoOfIds}`);

//creating a dictionary

let countOfRepetition = [];
addIt = 0;
let repeatedIds = [...new Set(emailIdMatch)];
//console.log(repeatedIds);

for (let i = 0; i < repeatedIds.length; i++) {
    for (let j = 0; j < emailIdMatch.length; j++) {
        if (repeatedIds[i] === emailIdMatch[j]) {
            addIt++;
        }
    }
    countOfRepetition.push(addIt);
    addIt = 0;
}
//console.log(countOfRepetition);

let idsName = [];
for (let i = 0; i < repeatedIds.length; i++) {
    idsName[i] = repeatedIds[i].slice(1);
}
//console.log(idsName);

let dictionary = {};

for (let i = 0; i < idsName.length; i++) {
    dictionary[idsName[i]] = countOfRepetition[i];
}

console.log(dictionary);

//sorting the array to display maxoccured domain

let dictionaryArray = [];

for (let i = 0; i < idsName.length; i++) {
    dictionaryArray[i] = [idsName[i], countOfRepetition[i]];
}

//console.log(dictionaryArray);

let tempId;
let tempValue;
let sortedArray = [];

for (let i = 0; i < dictionaryArray.length; i++) {
    for (let j = i + 1; j < dictionaryArray.length; j++) {
        if (dictionaryArray[i][1] < dictionaryArray[j][1]) {
            tempId = dictionaryArray[i][0];
            tempValue = dictionaryArray[i][1];
            dictionaryArray[i] = [dictionaryArray[j][0], dictionaryArray[j][1]];
            dictionaryArray[j] = [tempId, tempValue];
        }
    }
}
//console.log(dictionaryArray);


//displaying top 10 common domains

console.log('The 10 most common domains are:');
for (let i = 0; i < 10; i++) {
    console.log(dictionaryArray[i][0]);
}

//displaying domains that exceed the freq entered


console.log('Enter the minimum frequency at which the domain names are used:');
let frequency = readline.prompt();

for (let i = 0; i < dictionaryArray.length; i++) {
    if (dictionaryArray[i][1]>=frequency){
        console.log(dictionaryArray[i][0]);
    }
}