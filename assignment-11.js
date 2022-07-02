// Instructions:- There are five different car brands
// Mercedes, BMW, Tesla, Cadillac, Ferrari
// All These Brands have a specific rank assigned to them
// Display a message for e.g "BMW is on Rank 2"

var rank = 4;

switch (rank) {
  case 1:
    console.log(`Mercedez is on rank ${rank}`);
    break;

  case 2:
    console.log(`BMW is on rank ${rank}`);
    break;

  case 3:
    console.log(`Tesla is on rank ${rank}`);
    break;

  case 4:
    console.log(`Cadillac is on rank ${rank}`);
    break;

  case 5:
    console.log(`Ferrari is on rank ${rank}`);
    break;

  default:
    console.log("There is no brand in this rank");
    break;
}
