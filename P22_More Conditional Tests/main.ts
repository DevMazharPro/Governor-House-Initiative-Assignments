// For Tests of equality and inequality with strings
let string1: string= "Mazhar";
let string2: string= "Hussain";
console.log(string1 == string2) //False
console.log(string1 != string2); // True
// Tests using the lower case function
console.log(string1.toLowerCase() === "mazhar"); //True
console.log(string2.toLowerCase() != "hussain"); // False
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number= 15;
let num2: number= 18;
console.log(num1 === num2) //false
console.log(num1 != num2); //true
console.log(num1 > num2); // false
console.log(num1 < num2); //true
console.log(num1 >= 15); //true
console.log(num2 <= 17); //false
// Tests using "and" and "or" operators
let car1: string = "toyota";
let car2: string = "honda";
console.log(num1 > 12 && car1 === "toyota"); //True
console.log(num1 === 2 || car1 == car2); //False
// Test whether an item is in a array
let friendsArray: string []= ["Fahad", "Abrar", "Maryam"]
console.log(friendsArray.includes("Fahad")); //True
// Test whether an item is not in a array
console.log(!friendsArray.includes("Israr")); //True








