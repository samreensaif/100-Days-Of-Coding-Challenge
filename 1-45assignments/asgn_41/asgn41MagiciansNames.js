//41. Magicians: Make an array of magician’s names. Pass the array to a function 
//called show_magicians(), which prints the name of each magician in the array.
var magicians_name = ["David Blaine", "Doug Henning", "Criss Angel"];
function show_magicians(magician) {
    magician.forEach(function (abc) { return console.log(abc); });
    console.log("\n");
    for (var i = 0; i < magicians_name.length; i++) //2nd method of getting array elements
     {
        console.log(magicians_name[i]);
    }
}
show_magicians(magicians_name);
