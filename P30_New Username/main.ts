let currentUsers: string[]= ["Fahad", "Imran", "Faisal", "Nawaz Sharif", "Mazhar"];
let newUsers: string[]= ["Halepoto", "IMRAN", "Sami", "Farhan", "MAZHAR"];

for (let newUser of newUsers) {
let isUserTaken: boolean= currentUsers.some(user =>user.toLowerCase() === newUser.toLowerCase());
if (isUserTaken){
    console.log(`Sorry, the username "${newUser}" is already taken. Please enter a new username.`);
}
else{
    console.log(`Congratulations! The username "${newUser}" is available.`);
}
}