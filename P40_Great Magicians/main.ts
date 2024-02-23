function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
        console.log(magician);
}}
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}
let magicianNames: string[] = ["Bhurgri", "Khoso", "Blackie", "Harry Potter"];
let greatMagicians: string[] = make_great(magicianNames);
show_magicians(greatMagicians);
