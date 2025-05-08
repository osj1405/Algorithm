let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = Number(input[0]);

for(let i = 0; i < number; i++){
    let star = "";
    for(let j = 0; j < i+1; j++){
        star += "*";
    }
    console.log(star);
}