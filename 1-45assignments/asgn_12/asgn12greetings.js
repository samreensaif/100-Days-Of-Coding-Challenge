var friendsName = ["firzah", "musaab", "kanza", "omar"];
var message = "How are you dear!";
friendsName.forEach(function (name) { return console.log(name, message); });
friendsName.forEach(function (name) { return console.log("Hello, ".concat(name), message); });
