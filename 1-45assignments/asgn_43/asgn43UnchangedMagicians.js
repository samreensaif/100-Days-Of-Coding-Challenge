/*43. Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great()
 with a copy of the array of magicians’ names. Because the original array will be unchanged,
 return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/
var magicians_name = ["David Blaine", "Doug Henning", "Criss Angel"];
function show_magicians(magician) {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var i = magician_1[_i];
        console.log(i);
    }
}
console.log("\n ORIGINAL ARRAY");
show_magicians(magicians_name);
// Makes another function make_great to modify the original array by using map() function then print
function make_great(abc) {
    var modified_array = abc.map(function (abc) { return "The Great, ".concat(abc); });
    return modified_array;
}
var f = make_great(magicians_name);
console.log("\n MODIFIED ARRAY");
show_magicians(f);
