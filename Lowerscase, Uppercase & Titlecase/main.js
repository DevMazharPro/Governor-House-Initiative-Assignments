var personName = "MAZHAR";
console.log(personName.toLowerCase());
var personNameTwo = "mazhar";
console.log(personNameTwo.toUpperCase());
function toTitleCase(str) {
    return str.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
console.log(toTitleCase(personNameTwo));
