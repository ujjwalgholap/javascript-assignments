//bear, fox, lion - these are wild animals
// cat, dog, fish - these are pet animals
// rhino, tiger - these are zoo animals
var animal = "crow";

switch (animal) {
  case "lion":
  case "fox":
  case "bear":
    console.log("these are wild animals");
    break;

  case "cat":
  case "dog":
  case "fish":
    console.log("these are pet animals");
    break;

  case "rhino":
  case "tiger":
    console.log("rhino, tiger - these are zoo animals");
    break;

  default:
    console.log("No animal category for this");
    break;
}
