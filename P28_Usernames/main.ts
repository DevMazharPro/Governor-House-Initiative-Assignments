let  usernames: string[]= ["admin", "fahad", "Imran", "Ahmed", "Mazhar"];
for (let username of usernames){
    if (username === "admin"){
        console.log("Hello admin, would you like to see a status report?")
    }
    else {
        console.log(`Hello ${username}, thank you for logging again.`)
    }
}