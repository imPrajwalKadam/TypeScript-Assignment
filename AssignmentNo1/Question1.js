/*
Write a typescript program which contains one function named as Maximum. That function accepts
three parameters and it should returns largest value from three input parameters.
Input : 23 89 6
Output : Maximum number is 89
*/
function Maximum(No1, No2, No3) {
    var ret = 0;
    if (No1 > No2) {
        return No1;
    }
    else if (No2 > No3) {
        return No2;
    }
    else {
        return No3;
    }
}
var Value1 = 11;
var Value2 = 21;
var Value3 = 51;
var iRet = 0;
iRet = Maximum(Value1, Value2, Value3);
console.log("Largest number is:", iRet);
