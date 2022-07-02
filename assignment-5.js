var num1 = 3;
var num2 = 5;
var result = `num1 is greater than num2:${num1 > num2}\nnum1 is greater than equal to num2:${
  num1 >= num2
}
\nnum1 is less than equal to num2:${num1 <= num2}\nnum1 is equal to num2:${num1 == num2}
\nnum1 is strictly equal to num2:${num1 === num2}`;
// num1 < num2     -> num1 is less than num2
// num1 >= num2   -> num1 is greater than equal to num2
// num1 <= num2   -> num1 is less than equal to num2
// num1 == num2    -> num1 is equal to num2
// num1 === num2    -> num1 is strictly equal to num2
console.log(result);
