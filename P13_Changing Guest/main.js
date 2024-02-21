// Question 14
var guestNames = ["Ali", "Elon Musk", "Daniyal"];
guestNames.forEach(function (guests) {
    console.log("Hey ".concat(guests, ", you are invited for Dinner at Home."));
});
// 15Question Starting
var guestUnavailable = "Ali";
var newGuest = "Malik";
guestNames[0] = newGuest;
guestNames.forEach(function (guests) {
    console.log("Hey ".concat(guests, ", you are invited for Dinner at Home."));
});
console.log("".concat(guestNames[0], ", is not available today."));
