let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let testCase = Number(input[0]);


for(let i = 1; i <= testCase; i++){
	let totalScore = 0;
	let avgScore = 0;
	let data = input[i].split(' ').map(x => Number(x));
	let student = data[0];
	let nice = 0;
	
	for(let j = 1; j <= student; j++){
		totalScore += data[j];
	}
	avgScore = Number(totalScore / student);
	for(let j = 1; j <= student; j++){
		if(data[j] > avgScore){
			nice++;
		}
	}
	console.log((nice / student).toFixed(3)*100 + "%");
}