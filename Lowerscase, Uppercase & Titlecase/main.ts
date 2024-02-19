var personName: string= "MAZHAR"
console.log(personName.toLowerCase());

var personNameTwo: string= "mazhar"
console.log(personNameTwo.toUpperCase());

function toTitleCase(str: string): string {
    return str.replace(/\b\w/g, (char: string) => char.toUpperCase());
}

console.log(toTitleCase(personNameTwo));


