var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
   Create one typescript application which contains one class named as Circle.
   Circle class contains two characteristics (Class data members) as Radius, PI.
   Create one parametrised constructor which accept one value and assign it to Radius. Value of
   PI member is set to 3.14.
   In Circle class we have to one method (Behaviours) as Area which will return area of Circle.
   After designing the class create two objects of that class by providing some hardcoded value.
   Call the method Area by using both the objects.
*/
var Circle = /** @class */ (function () {
    function Circle(iRed, PIno) {
        this.Radius = iRed;
        this.PI = PIno;
        this.ans = 0;
    }
    Circle.prototype.Area = function () {
        this.ans = this.PI * this.Radius * this.Radius;
        return this.ans;
    };
    return Circle;
}());
/*
    Create one typescript application which contains one class named as CircleX which sill
    inherits above Circle class.
    In CircleX class we have to write one method (Behaviours) as Circumference which will return
    circumference of circle.
    After designing the class create two objects of that class by providing some hardcoded value.
    Call Circumference and Area methods by using both the objects.
 */
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(Radius, PI) {
        return _super.call(this, Radius, PI) || this;
    }
    CircleX.prototype.Circumference = function () {
        this.ans = 2 * this.PI * this.Radius;
        return this.ans;
    };
    return CircleX;
}(Circle));
var ret = 0;
var obj1 = new CircleX(5, 3.14);
ret = obj1.Area();
console.log("Inside Circle Class:");
console.log("Area of Circle is:", ret);
ret = obj1.Circumference();
console.log("Inside CircleX Class:");
console.log("Circumference of Circle is: " + ret);
