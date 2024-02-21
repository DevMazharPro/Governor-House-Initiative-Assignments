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
// 17 Question
console.log("Ops, Big Table won't be availble at night, we have only 2 seats now");
while (guestNames.length > 2) {
    var removedGuest = guestNames.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
guestNames.forEach(function (remainingGuest) {
    console.log("Dear ".concat(remainingGuest, ", you're still invited to dinner."));
});
guestNames.pop();
guestNames.pop();
console.log("Final guest list: ".concat(guestNames));
