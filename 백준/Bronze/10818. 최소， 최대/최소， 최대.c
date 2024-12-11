#include <stdio.h>
#include <stdlib.h>

int main(void){
    int N;
    scanf("%d", &N);
    int* array = (int*)malloc(sizeof(int)*N);
    
    for(int i = 0; i < N; i++){
        scanf("%d ", &array[i]);
    }
    int min = array[0];
    int max = array[0];
    for(int i = 0; i < N; i++){
        if(min > array[i]){
            min = array[i];
        }
        
        if(max < array[i]){
            max = array[i];
        }
    }
    
    printf("%d %d", min, max);
}