// Instructions:- calculate the area of a square, reactangle and circle, if the sum of all the three areas
// is greater than 200, display a message that , "Sum of Areas is greater than 200", if not then display the
// product of all the three areas.

var a = 30;
var b = 7;
var r = 4;

var areaSquare = a * a;
var areaRect = a * b;
var areaCircle = 3.14 * (r * r);
var sum = areaSquare + areaRect + areaCircle;
var product = areaSquare * areaRect * areaCircle;
if (sum > 200) {
  console.log("Sum of Areas is greater than 200");
} else {
  console.log("product of all the three areas", product);
}
