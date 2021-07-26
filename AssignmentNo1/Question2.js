/*
Write a typescript program which contains one function named as Area. That function should
calculate area of circle. Accept value of radius from user and return its area. Default value of PI
should be 3.14 if it is not provided by the caller.
Input : 5
Output : Area of circle is 78.5
*/
function Area(Radious, PI) {
    var ans = 0;
    ans = PI * Radious * Radious;
    return ans;
}
var no = 5;
var ret = 0;
ret = Area(no, 3.14);
console.log("Area is:", ret);
