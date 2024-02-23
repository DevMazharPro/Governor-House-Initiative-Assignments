var currentUsers = ["Fahad", "Imran", "Faisal", "Nawaz Sharif", "Mazhar"];
var newUsers = ["Halepoto", "IMRAN", "Sami", "Farhan", "MAZHAR"];
var _loop_1 = function (newUser) {
    var isUserTaken = currentUsers.some(function (user) { return user.toLowerCase() === newUser.toLowerCase(); });
    if (isUserTaken) {
        console.log("Sorry, the username \"".concat(newUser, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username \"".concat(newUser, "\" is available."));
    }
};
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
