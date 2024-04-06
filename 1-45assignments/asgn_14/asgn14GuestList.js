/*14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.
*/
var guest_list = ["Saif", "Naureen", "Zeenat", "Ayaz"];
var inivitation = "I would like to invite you at Dinner on Monday 8:00 P.M. sharp.";
console.log("\n");
guest_list.forEach(function (abc) { return console.log("Hello, ".concat(abc), inivitation); });
//2nd method
console.log("\n");
for (var _i = 0, guest_list_1 = guest_list; _i < guest_list_1.length; _i++) {
    var name_1 = guest_list_1[_i];
    console.log(name_1, inivitation);
}
