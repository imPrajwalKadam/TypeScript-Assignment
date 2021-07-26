/*
 Write a typescript program which contains one function named as ChkPrime. That function should
 accept one number and it should return true if the given number is prime and otherwise return false.
 Input : 11
 Output : It is prime number
*/
function ChkPrime(iNo) {
    if (iNo < 0) {
        iNo = -iNo;
    }
    var iCnt = 0;
    for (iCnt = 2; iCnt <= iNo / 2; iCnt++) {
        if ((iNo % iCnt) == 0) {
            break;
        }
    }
    if (iCnt != (iNo / 2)) {
        return true;
    }
    else {
        return false;
    }
}
var value = 3;
var bRet = null;
bRet = ChkPrime(value);
if (bRet == true) {
    console.log("It is Prime number");
}
else {
    console.log("It is not Prime number");
}
