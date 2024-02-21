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
// 16Question Starting
console.log("Great news, we got a bigger table. We have invite three more friends");
guestNames.unshift("Falak");
guestNames.splice(Math.ceil(guestNames.length / 2), 0, "Azhar");
guestNames.push("Masroor");
guestNames.forEach(function (guests) {
    console.log("Hey ".concat(guests, ", you are invited for Dinner at Home."));
});
