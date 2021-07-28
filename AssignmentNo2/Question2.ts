/*
 Write a typescript program which contains one function named as Summation. That function 
 accepts array of numbers and returns the summation of each number from array. 
 Input : 23 6 7 4 5 7 
 Output : Addition is 52 
 */
function Summation(arr:number[])
{
     var i:number = 0;
     var iSum:number = 0;
     for(i = 0;i < arr.length;i++)
     {
          iSum = iSum+arr[i];
     }
     return iSum;
}

var iNo:number[] =[23,6,7,4,5,7];
var iRet:number = 0;
iRet = Summation(iNo);
console.log(iRet);