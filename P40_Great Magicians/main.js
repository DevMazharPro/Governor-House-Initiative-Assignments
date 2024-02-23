function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var magicianNames = ["Bhurgri", "Khoso", "Blackie", "Harry Potter"];
var greatMagicians = make_great(magicianNames);
show_magicians(greatMagicians);
