let usernames: string[]=["Fahad", "Mazhar", "Admin", "Elon Musk", "Ali"];
if (usernames.length === 0){
    console.log("We need new users.")
}
else{
    for (let username of usernames){
        if (username === "Admin"){
            console.log("Hello admin, would you like to see a status report?")
        }
        else {
            console.log(`Hello ${username}, thank you for logging again.`)
        }
    }
}