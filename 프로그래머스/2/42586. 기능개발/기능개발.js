function solution(progresses, speeds) {
    var answer = [];
    let stack = [];
    let rest = progresses.map((element, index) => Math.ceil((100 - element) / speeds[index]));
    for(let i = 0; i < rest.length; i++){
        let task = 0;
        while(stack.length > 0 && stack[0] < rest[i]){
            task++;
            stack.pop();
        }
        stack.push(rest[i]);
        if(task > 0){
            answer.push(task);
        }
    }
    console.log(answer);
    console.log(stack);
    if(stack.length > 0)
        answer.push(stack.length);
    console.log(answer);
    return answer;
}