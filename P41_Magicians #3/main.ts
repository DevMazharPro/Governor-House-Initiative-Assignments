function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians: string[]): string[] {
    // Create a new array with modified magician names
    return magicians.map(magician => `the Great ${magician}`);
}
let magicianNames: string[] = ["Bhurgri", "Khoso", "Blackie", "Harry Potter"];
let greatMagicians: string[] = make_great([...magicianNames]);
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);