#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct Stack{
    int top;
    int elements[100001];
} Stack;

int is_full(Stack* s){
    return (s->top == 100000);
}
void push(Stack* s, int element){
    if(s->top == 100000)
        return;
    s->top++;
    s->elements[s->top] = element;
}

int pop(Stack* s){
    if(s->top == -1){
       return -1;
    }
    int element = s->elements[s->top];
   // s->element[s->top] = NULL;
    s->top--;
    return element;
}

int empty(Stack* s){
    return (s->top) == -1;
}

int size(Stack* s){
    return (s->top) + 1;
}

int top(Stack* s){
    if(s->top == -1){
        return -1;
    }else{
        return s->elements[s->top];
    }
}

int main(){
    Stack s;
    s.top = -1;

    int N;
    scanf("%d", &N);
    char* func;
    func = (char*)malloc(sizeof(char)*6);
    for(int i = 0; i < N; i++){
        scanf(" %s", func);
        if(strcmp(func, "push") == 0){
            int n;
            scanf(" %d", &n);
            push(&s, n);
        }
        else if(strcmp(func, "pop") == 0){
            printf("%d \n", pop(&s));
        }
        else if(strcmp(func, "size") == 0){
            printf("%d \n", size(&s));
        }
        else if(strcmp(func, "top") == 0){
            printf("%d \n", top(&s));
        }
        else if(strcmp(func, "empty") == 0){
            printf("%d \n", empty(&s));
        }
    }

    return 0;
}