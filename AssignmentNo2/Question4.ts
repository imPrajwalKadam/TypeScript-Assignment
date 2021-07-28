/*
 Write a typescript program which contains one arrow function named as ChkArmstrong. That 
 function accepts one numbers and check whether number is Armstrong number or not. 
 Input : 153 
 1*1*1+5*5*5+3*3*3 = 153
 Output : It is Armstrong number
 */
//Armstrong number is a number that is equal to the sum of its digits.

function ChkArmstrong(iNo:number):boolean
{
     var cube = 0;
     var iSum = 0;
     var iDigit = 0;
     var temp = iNo;
     while(temp != 0)
     {
          iDigit = temp%10;
          cube = iDigit*iDigit*iDigit;
          iSum = iSum + cube;
          temp = (temp/10 | 0);//floor division(converts float to integer)
          console.log(cube);
     }
     if( iSum == iNo)
     {
          return true;
     }
     else{
          return false;
     }

}

var bRet:boolean = null;
var no = 153;

bRet = ChkArmstrong(no);
if(bRet == true)
{
     console.log("It is armstrong number");
}
else{
     console.log("It is not armstrong number");
}