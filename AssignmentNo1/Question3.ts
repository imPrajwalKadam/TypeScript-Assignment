/*
Write a typescript program which contains one function named as DisplayFactors. That function 
should accept one number and display factors of that number. 
Input : 20 
Output : 1 2 4 5 10
*/

function DisplayFactor(Value:number)
{
     if(Value<=0)
     {
          Value = -Value;
     }
     var iCnt:number = 0;
     for(iCnt = 0;iCnt <= Value/2;iCnt++)
     {
          if(Value%iCnt==0)
          {
               console.log(iCnt);
          }
     }
}

var iNo:number = 20;
DisplayFactor(iNo);