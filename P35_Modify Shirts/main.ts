function makeShirt(size: string = "large", message: string = "I love TypeScript."):void{
    console.log(`Shirt Size is: ${size}`);
    console.log(`Message is: ${message}`);
}
makeShirt();
makeShirt("small")
makeShirt("Medium", "Coding is Love!")