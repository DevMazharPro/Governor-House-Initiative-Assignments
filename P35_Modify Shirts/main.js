function makeShirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript."; }
    console.log("Shirt Size is: ".concat(size));
    console.log("Message is: ".concat(message));
}
makeShirt();
makeShirt("small");
makeShirt("Medium", "Coding is Love!");
