const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let testCase = Number(input[0]);
let count = 0;
for(let i = 1; i <= testCase; i++){
    let data = input[i].split('');
    let match = 1;
    for(let j = 1; j < data.length; j++){
        if(data[j-1] != data[j]){
            match++;
        }
    }
    let myData = new Set(data);
    if(match == myData.size){
        count++;
    }
}

console.log(count);
