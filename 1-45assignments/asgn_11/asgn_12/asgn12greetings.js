/* 12. Greetings: Start with the array you used in Exercise 11, but instead of just
printing each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.
 */
var friendsName = ["firzah", "musaab", "kanza", "omar"];
var message = "How are you dear!";
console.log("\n");
friendsName.forEach(function (name) { return console.log(name, message); });
console.log("\n");
friendsName.forEach(function (name) { return console.log("Hello, ".concat(name), message); });
//by using for loop
console.log("\n");
for (var i = 0; i < friendsName.length; i++) {
    console.log("Hello, ".concat(friendsName[i], ", ").concat(message));
}
