const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const testCaseNumber = Number(input[0]);

for(let i = 1; i <= testCaseNumber; i++){
    let testCase = input[i].split(' ');
    let repeat = Number(testCase[0]);
    let data = ""
    
    for (x of testCase[1]){
        for(let j = 0; j < repeat; j++){
            data += x;
        }
    }
    console.log(data);
}