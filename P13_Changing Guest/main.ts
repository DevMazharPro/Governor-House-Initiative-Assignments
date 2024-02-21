// Question 14
let guestNames: string[]= ["Ali", "Elon Musk", "Daniyal"];
guestNames.forEach((guests:string)=>{
    console.log(`Hey ${guests}, you are invited for Dinner at Home.`);
})
// 15Question Starting
let guestUnavailable: string= "Ali";
let newGuest: string= "Malik";
guestNames[0]= newGuest;
guestNames.forEach((guests:string)=>{
    console.log(`Hey ${guests}, you are invited for Dinner at Home.`);
})
console.log(`${guestNames[0]}, is not available today.`);