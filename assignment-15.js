//Instructions: You have 3 items
// item1 is a ball & carrier is bluedart -> it will be delivered to India
//item2 is a basket & carrier is UPS -> it will be delivered to USA
// item3 is a fish-tank & carrier is FEDEX -> it will be delivered to Canada

var item = "basket";
var carrier = "UPS";

if (item === "ball" && carrier === "bluedart") {
  console.log("it will be delivered to India");
} else if (item === "basket" && carrier === "UPS") {
  console.log("it will be delivered to USA");
} else if (item === "fish-tank" && carrier === "FEDEX") {
  console.log("it will be delivered to Canada");
} else {
  console.log("No delivery service");
}
