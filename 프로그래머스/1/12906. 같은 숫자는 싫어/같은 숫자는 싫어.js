class Stack{
    constructor(){
        this._arr = []
    }
    
    push(item){
        if(this._arr[this._arr.length - 1] !== item){
            this._arr.push(item)
        }
        return this._arr
    }
    
    get(){
        return this._arr
    }
}

function solution(arr)
{
    var answer = [];
    
    const stack = new Stack();
    
    for(const item of arr){
        stack.push(item)
    }
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    answer = stack.get()
    return answer
    
}