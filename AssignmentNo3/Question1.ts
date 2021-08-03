/*
   Create one typescript application which contains one class named as Arithmetic. 
   Arithmetic class contains three characteristics (Class data members) as Number1, Number2. 
   Create one parametrised constructor which accept two values and assign it to Number1 and 
   Number2. 
   In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction , 
   Multiplication and Division. 
   Addition method will add Number1 , Number2 & return result. 
   Subtraction method will subtract Number1 , Number2 & return result. 
   Multiplication method will multiply Number1 , Number2 & return result. 
   Division method will divide Number1 , Number2 & return result. 
   After designing the class create two objects of that class by providing some hardcoded value. 
   Call all the methods by using both the objects.
*/
class Arithmatic {
     Number1: number;
     Number2: number;
     ans: number;

     constructor(iNo1: number, iNo2: number) {
          this.Number1 = iNo1;
          this.Number2 = iNo2;
          this.ans = 0;
     }

     Addition() {
          this.ans = this.Number1 + this.Number2
          return this.ans;
     }

     Substraction() {
          this.ans = this.Number1 - this.Number2;
          return this.ans;
     }

     Multiplication() {
          this.ans = this.Number1 * this.Number2;
          return this.ans;
     }

     Division() {
          this.ans = this.Number1 / this.Number2;
          return this.ans;
     }
}
var ret: number = 0;
var obj1 = new Arithmatic(11, 8);
var obj2 = new Arithmatic(2, 10);

ret = obj1.Addition();
console.log("Addition of obj1 is:", ret);

ret = obj2.Addition();
console.log("Addition of obj2 is:", ret);

ret = obj1.Substraction();
console.log("Substraction of obj1 is:", ret);

ret = obj2.Substraction();
console.log("Substraction of obj2 is:", ret);

ret = obj1.Multiplication()
console.log("Multiplication of obj1 is:", ret);

ret = obj2.Multiplication()
console.log("Multiplication of obj2 is:", ret);

ret = obj1.Division();
console.log("Division of obj1 is:", ret);

ret = obj2.Division();
console.log("Division of obj2 is:", ret);

