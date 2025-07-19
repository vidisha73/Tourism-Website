#include<stdio.h>
#include<string.h>
#include<stdlib.h>
#include<math.h>

char *intToBinary(int num) {
    char* binary = (char*)malloc(33);
    
    if(num==0) {
        return "0\0";
    }
    int  i=0;
    while( num>0) {
        binary[i++] = num%2 + '0';
        num/=2;
    }
    binary[i] = '\0';

    int len = strlen(binary);
    for(int i=0;i<len/2;i++) {
        char temp = binary[i];
        binary[i] = binary[len-i-1];
        binary[len-i-1] = temp;
    }
    printf("%s",binary);
    return binary;
}

int BinaryToInt(char str[]) {
    int n = 0;
    int len = strlen(str);

    // Loop through the binary string from left to right
    for (int i = 0; i < len; i++) {
        n = n * 2 + (str[i] - '0');  // Convert '0' or '1' character to integer and accumulate
        // printf("\n%d",n);
    }

    return n;
}

int maxGoodNumber(int* nums, int numsSize) {
    
    char* binary = (char*)malloc(33);
    binary[0] = '\0';
    
    for(int i=0 ; i< numsSize ; i++) {
        strcat(binary,intToBinary(nums[i]));
    }
   
    int result = BinaryToInt(binary);
    return result;
    
}

void main() {
    int nums[] = {1,2,3};
    int numsSize = sizeof(nums)/sizeof(nums[0]);
    
    printf("\n%d",maxGoodNumber(nums, numsSize));
}