/*
Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.
*/
var friendsName = ["Firzah", "Musaab", "Kanza", "Omar"];
console.log("\n");
console.log(friendsName);
console.log("\n");
// 2nd method of printing array of elements
friendsName.forEach(function (name) { return console.log(name); });
// third methid of print array elements
console.log("\n");
for (var i = 0; i < friendsName.length; i++) {
    console.log(friendsName[i]);
}
