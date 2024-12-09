#include <stdio.h>
#include <stdlib.h>

typedef struct Stack{
    int top;
    int* elements;
} Stack;

void initStack(Stack* s, int K){
    s->top = -1;
    s->elements = (int*)malloc(sizeof(int)*K);
}

int isFull(Stack* s){
    return(s->top == 100,000);
}

int isEmpty(Stack* s){
    return(s->top == -1);
}

void push(Stack* s, int element){
    if(isFull(s)){
        return;
    }
    
    s->top++;
    s->elements[s->top] = element;
}

void pop(Stack* s){
    if(isEmpty(s)){
        return;
    }
    s->elements[s->top] = 0;
    s->top--;
}

int Sum(Stack* s){
    int sum = 0;
    for(int i = 0; i < s->top +1; i++){
        sum += s->elements[i];
    }
    
    return sum;
}

int main(){
    Stack s;
    
    int K;
    scanf("%d", &K);
    initStack(&s, K);
    
    for(int i = 0; i < K; i++){
        int n;
        scanf("%d", &n);
        if(n == 0){
            pop(&s);
        }
        else{
            push(&s, n);
        }
    }
    
    printf("%d \n", Sum(&s));
    return 0;
}