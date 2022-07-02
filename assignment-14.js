//if the cart total is greater than 500 and the total number of product is greater than or equal to 3
// then display a msg saying, You are eligible for a free delivery and if not then diplay, you are not eligle for a free delivery

var total = 499;
var numberOfProducts = 4;

var result =
  total > 500 && numberOfProducts >= 3
    ? "You are eligible for a free delivery"
    : "you are not eligle for a free delivery";
console.log(result);
