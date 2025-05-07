let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let time = input[0].split(' ');
let hours = Number(time[0]);
let minutes = Number(time[1]);

if(minutes >= 45){
	minutes -= 45;
} else if(minutes < 45 && hours > 0){
	 minutes = 60 - (45 - minutes);
	 hours--;
} else {
	 minutes = 60 - (45 - minutes);
	 hours = 23;
}

console.log(`${hours} ${minutes}`);