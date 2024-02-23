var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    // Create a new array with modified magician names
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var magicianNames = ["Bhurgri", "Khoso", "Blackie", "Harry Potter"];
var greatMagicians = make_great(__spreadArray([], magicianNames, true));
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
