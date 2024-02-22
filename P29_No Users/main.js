var usernames = ["Fahad", "Mazhar", "Admin", "Elon Musk", "Ali"];
if (usernames.length === 0) {
    console.log("We need new users.");
}
else {
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username === "Admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging again."));
        }
    }
}
