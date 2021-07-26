/*
Write a typescript program which contains one function named as Area. That function should 
calculate area of circle. Accept value of radius from user and return its area. Default value of PI 
should be 3.14 if it is not provided by the caller. 
Input : 5 
Output : Area of circle is 78.5 
*/
function Area(Radious:number,PI:number):number
{
     var ans:number = 0;
     ans = PI * Radious*Radious;
     return ans;
}
var no:number = 5;
var ret:number =0;
ret = Area(no,3.14);
console.log("Area is:",ret);