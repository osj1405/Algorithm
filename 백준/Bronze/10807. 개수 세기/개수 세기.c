#include <stdio.h>
#include <stdlib.h>

int main(void){
    int n;
    scanf("%d", &n);
    int* array = (int*)malloc(sizeof(int)*n);
    for(int i = 0; i < n; i++){
        scanf("%d ", &array[i]);
    }
    
    int v;
    scanf("%d", &v);
    int count = 0;
    for(int i = 0; i < n; i ++){
        if(v == array[i]){
            count++;
        }
}
    printf("%d\n", count);
   
    
}