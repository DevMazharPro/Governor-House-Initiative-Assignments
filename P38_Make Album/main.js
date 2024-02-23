function make_album(artist, title, tracks) {
    if (tracks === void 0) { tracks = 0; }
    return {
        artist: artist,
        title: title,
        tracks: tracks > 0 ? tracks : undefined
    };
}
var album1 = make_album("Mumtaz Molai", "Sindhi Songs");
var album2 = make_album("Ghulam Hussain Umrani", "Pathar Dill", 16);
var album3 = make_album("Bukhari", "25");
console.log(album1);
console.log(album2);
console.log(album3);
