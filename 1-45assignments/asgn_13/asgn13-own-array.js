/*13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list to print a series of statements about
 these items, such as “I would like to own a Honda motorcycle.”
*/
var fav_Transprt = ["car", "cycle", "sportsbike", "ship"];
var message = " i would like to own a";
//1st method
console.log("\n");
fav_Transprt.forEach(function (mode) { return console.log(message, mode); });
console.log("\n");
fav_Transprt.forEach(function (mode) { return console.log("wow ".concat(message, " "), mode); });
console.log("\n");
//second method
for (var i = 0; i < fav_Transprt.length; i++) {
    console.log(message, fav_Transprt[i]);
}
console.log("\n");
//3rd method
for (var _i = 0, fav_Transprt_1 = fav_Transprt; _i < fav_Transprt_1.length; _i++) {
    var name_1 = fav_Transprt_1[_i];
    console.log(message, name_1);
}
