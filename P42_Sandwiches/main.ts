function order_sandwich(...items: string[]): void {
    console.log("Sandwich Orders:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
}
order_sandwich("Subway", "Anda", "Bun Kabab");
order_sandwich("Turkey", "Chicken");
order_sandwich("Vegetables");
