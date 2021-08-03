/*
   Create one typescript application which contains one class named as Circle. 
   Circle class contains two characteristics (Class data members) as Radius, PI. 
   Create one parametrised constructor which accept one value and assign it to Radius. Value of 
   PI member is set to 3.14. 
   In Circle class we have to one method (Behaviours) as Area which will return area of Circle. 
   After designing the class create two objects of that class by providing some hardcoded value. 
   Call the method Area by using both the objects. 
*/
class Circle {
     Radius: number;
     PI: number;
     ans: number;

     constructor(iRed: number, PIno: number) {
          this.Radius = iRed;
          this.PI = PIno;
          this.ans = 0;
     }

     Area() {
          this.ans = this.PI * this.Radius * this.Radius;
          return this.ans;
     }
}
/*
    Create one typescript application which contains one class named as CircleX which sill 
    inherits above Circle class. 
    In CircleX class we have to write one method (Behaviours) as Circumference which will return 
    circumference of circle. 
    After designing the class create two objects of that class by providing some hardcoded value. 
    Call Circumference and Area methods by using both the objects. 
 */

class CircleX extends Circle {


     constructor(Radius: number, PI: number) {
          super(Radius, PI)
     }

     Circumference() {
          this.ans = 2 * this.PI * this.Radius;
          return this.ans;
     }
}
var ret: number = 0;
var obj1 = new CircleX(5, 3.14);

ret = obj1.Area();
console.log("Inside Circle Class:")
console.log("Area of Circle is:", ret);

ret = obj1.Circumference();
console.log("Inside CircleX Class:")
console.log("Circumference of Circle is: " + ret);



/*OutPut:
        Inside Circle Class:
        Area of Circle is: 78.5
        Inside CircleX Class:
        Circumference of Circle is: 31.400000000000002
 */