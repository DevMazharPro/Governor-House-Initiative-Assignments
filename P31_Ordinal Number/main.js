var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var ordinals = numbers_1[_i];
    if (ordinals == "1") {
        console.log("".concat(ordinals, "st."));
    }
    else if (ordinals == "2") {
        console.log("".concat(ordinals, "nd."));
    }
    else if (ordinals == "3") {
        console.log("".concat(ordinals, "rd."));
    }
    else {
        console.log("".concat(ordinals, "th."));
    }
}
