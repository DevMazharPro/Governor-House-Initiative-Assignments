function make_album(artist: string, title: string, tracks: number = 0): Record<string, any> {
    return {
        artist,
        title,
        tracks: tracks > 0 ? tracks : undefined
    };
}
let album1 = make_album("Mumtaz Molai", "Sindhi Songs");
let album2 = make_album("Ghulam Hussain Umrani", "Pathar Dill", 16);
let album3 = make_album("Bukhari", "25");
console.log(album1);
console.log(album2);
console.log(album3);
