function car_info(manufacturer: string, model: string, options: Record<string, any> = {}): Record<string, any> {
    return {
        manufacturer,
        model,
        ...options
    };
}
let myCar = car_info("Toyota", "Corolla", { color: "Golden", optionalFeature: "Sunroof" });~
console.log("Car Information:");
console.log(myCar);
