/*
rite a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the second largest number from array.
Input : 23 89 6 29 56 45 77 32
Output : Second Maximum number is 77
 */
function Maximum(arr) {
    var i = 0;
    var iMax = 0;
    var iMax2 = 0;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > iMax) {
            iMax2 = iMax;
            iMax = arr[i];
        }
        if ((arr[i] > iMax2) && (arr[i] != iMax)) {
            iMax2 = arr[i];
        }
    }
    return iMax;
}
var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
var iRet = 0;
iRet = Maximum(Arr);
console.log(iRet);
