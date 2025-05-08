const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = Number(input[0]);
let array = input[1].split(' ').map(Number);

let min = array[0];
let max = array[0];

for(let i = 0; i < number; i++){
    if(min > array[i]){
        min = array[i];
    }
    if(max < array[i]){
        max = array[i];
    }
}
console.log(min + ' ' + max);