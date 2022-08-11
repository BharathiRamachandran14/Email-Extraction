const fs = require('fs')
let inputFile = fs.readFileSync('C:\\Users\\bharam\\Downloads\\test.txt', { encoding: 'utf8' });


//console.log(inputFile);

function countNumberOfIds(inputText) {
    let counter = 0;
    for (let i = 0; i < inputText.length; i++) {
        if ((inputText.substring(i, i + 13) == '@softwire.com')) {
            counter++;
        }
    }
    return counter;
}

function countNumberOfEmailIds(inputText){
    return inputText.length;
    
}

let countId=countNumberOfIds(inputFile);

console.log(`No. of email ids present with @softwire.com: ${countId}`);

let softwireEmailId = inputFile.match(/(@softwire.com)/g);
//console.log(softwireEmailId);

let emailIdMatch= inputFile.match(/@[A-Za-z0-9]+.[A-Za-z.]*(?=\s)/g);
//console.log(emailIdMatch);

let countWithReg=countNumberOfEmailIds(softwireEmailId);
let countNoOfIds=countNumberOfEmailIds(emailIdMatch);

console.log(`No. of email ids present with @softwire.com: ${countWithReg}`);
console.log(`No. of email ids present : ${countNoOfIds}`);

let countOfRepetition=[];
addIt=0;
let repeatedIds=[...new Set(emailIdMatch)];
//console.log(repeatedIds);

for(let i=0;i<repeatedIds.length;i++){
    for(let j=0;j<emailIdMatch.length;j++){
        if(repeatedIds[i]===emailIdMatch[j]){
            addIt++;
        }
    }
    countOfRepetition.push(addIt);
    addIt=0;
}
//console.log(countOfRepetition);

let idsName=[];
for(let i=0;i<repeatedIds.length;i++){
    idsName[i]=repeatedIds[i].slice(1);
}
//console.log(idsName);

let dictionary={};

for(let i=0;i<idsName.length;i++){
    dictionary[idsName[i]]=countOfRepetition[i];
}

console.log(dictionary);

