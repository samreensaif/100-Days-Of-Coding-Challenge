/*42. Great Magicians: Start with a copy of your program from Exercise 41.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified*/
var magicians_name = ["David Blaine", "Doug Henning", "Criss Angel"];
// Makes function make_great to modify the original array by using map() function then print
function make_great(abc) {
    var modified_array = abc.map(function (abc) { return "The Great, ".concat(abc); });
    return modified_array;
}
var f = make_great(magicians_name);
console.log("\n Modified array \n");
show_magicians(f);
//function show_magician to print the original array 
function show_magicians(magician) {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var i = magician_1[_i];
        console.log("".concat(i));
    }
}
console.log("\n Original array\n ");
show_magicians(magicians_name);
