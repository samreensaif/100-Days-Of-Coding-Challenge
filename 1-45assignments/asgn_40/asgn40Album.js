"use strict";
// . Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object 
// containing these two pieces of information. Use the function to make three dictionaries representing 
// different albums. Print each return value to show that Objects are storing the album information correctly.
//make a function that has 3 parameters
function make_album(art_name, title, track) {
    // build an object  that has three arguments 
    let music_album = {
        a_name: art_name,
        t_name: title
    };
    if (track !== undefined) {
        music_album.track = track;
    }
    return music_album;
}
let album1 = make_album("Noor Jahan ", "Phool");
let album2 = make_album("Atif Aslam", "Jalpari");
let album3 = make_album("Rahat Fateh Ali Khan", " Bhanwar", 10);
console.log(album1);
console.log(album2);
console.log(album3);
