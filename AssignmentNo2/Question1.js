/*
 Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the largest number from array.
Input : 23 89 6 29 56 45 77 32
Output : Maximum number is 89
*/
function Maximum(arr) {
    var i = 0;
    var iMax = 0;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > iMax) {
            iMax = arr[i];
            if (iMax == iMax) {
                break;
            }
        }
    }
    return iMax;
}
var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
var iRet = 0;
iRet = Maximum(Arr);
console.log(iRet);
