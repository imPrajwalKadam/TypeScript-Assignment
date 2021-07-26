/*
   Write a typescript program which contains one function named as Fibonacci. That function accept
   one number from user and print Fibonacci series till that number.
   Input : 21
   Output : 1 1 2 3 5 8 13 21
*/
function Fibonacci(iNo) {
    var iCnt = 0;
    var iFeb1 = 0;
    var iFeb2 = 0;
    var iFeb3 = 1;
    for (iCnt = 0; iCnt <= 21; iCnt++) {
        console.log(iFeb3);
        iFeb1 = iFeb2 + iFeb3;
        iFeb2 = iFeb3;
        iFeb3 = iFeb1;
    }
}
var Value = 21;
Fibonacci(Value);
