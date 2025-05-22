const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");


let total = [];

for(let i = 0; i < input.length; i++){
    let stack = [];
    let result = "yes";
    if(input[i] == "."){
        break;
    }
    let data = input[i].split('');

    for(let k = 0; k < data.length; k++){
        if(data[k] == "(" || data[k] == "["){
            stack.push(data[k]);
        } else if(data[k] == ")"){
            if(stack.length > 0 && stack[stack.length - 1] == "("){
                stack.pop();
                result = "yes";
            } else {
                result = "no";
                break;
            }
        } else if(data[k] == "]"){
            if(stack.length > 0 && stack[stack.length - 1] == "[" ){
                stack.pop();
                result = "yes";
            } else {
                result = "no";
                break;
            }
        }
    }
    if(stack.length > 0){
        result = "no";
    }
    total.push(result);
}

console.log(total.join('\n'));

