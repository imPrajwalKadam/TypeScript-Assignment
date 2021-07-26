/*
   Write a typescript program which contains one function named as Fibonacci. That function accept 
   one number from user and print Fibonacci series till that number. 
   Input : 21 
   Output : 1 1 2 3 5 8 13 21
*/

function Fibonacci(iNo: number):void {
     var iCnt: number = 0;
     var iFeb1: number = 0;
     var iFeb2: number = 0;
     var iFeb3: number = 1;

     for (iCnt = 0; iCnt <= 21; iCnt++) {
          console.log(iFeb3);
          iFeb1 = iFeb2 + iFeb3;
          iFeb2 = iFeb3;
          iFeb3 = iFeb1;
     }


}
var Value: number = 21;
Fibonacci(Value);