class Queue {
    constructor (){
        this.queue = [];
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    
    isEmpty(){
        return this.headIndex == this.tailIndex;
    }
    enqueue(item){
        this.queue[this.tailIndex] = item;
        this.tailIndex++;
    }
    
    dequeue(){
        if(this.isEmpty()){
            return -1;
        } else {
            const item = this.queue[this.headIndex];
            this.headIndex++;
            return item;
        }
        
    }
    
    peek(){
        if(this.isEmpty()){
            return -1;
        } else {            
            return this.queue[this.headIndex];
        }
    }
    
    tail(){
        if(this.isEmpty()){
            return -1;
        } else {            
            return this.queue[this.tailIndex - 1];
        }
    }
    size(){
        return this.tailIndex - this.headIndex;
    }
}

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let result = [];
const queue = new Queue();

for(let i = 1; i <= N; i++){
    let command = input[i];
    if(command.startsWith("push")){
        let data = command.split(" ");
        queue.enqueue(Number(data[1]));
    } else if(command.startsWith("pop")){
        result.push(queue.dequeue());
    } else if(command.startsWith("size")){
        result.push(queue.size());
    } else if(command.startsWith("front")){
        result.push(queue.peek());
    } else if(command.startsWith("back")){
        result.push(queue.tail());
    } else if(command.startsWith("empty")){
        if(queue.isEmpty()){
            result.push(1);
        } else {
            result.push(0);
        }
    }
}

console.log(result.join('\n'));