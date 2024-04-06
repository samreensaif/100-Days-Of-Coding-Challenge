/* More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.


*/
var guest_list = ["Saif", "Naureen", "Zeenat", "Ayaz"];
// informin guest that i got bigger space for party
//let newguest_list = ["Saif","Naureen","Zeenat","Ayaz;"];
var inivitation = "good new!its bigger table now";
//add new guest at first 
guest_list.unshift("Omar");
//add new guest at last
guest_list.push("Kanza");
for (var _i = 0, guest_list_1 = guest_list; _i < guest_list_1.length; _i++) {
    var name_1 = guest_list_1[_i];
    console.log(name_1, inivitation);
}
//add guest in middle
var middle_Index = Math.floor(guest_list.length / 2);
guest_list.splice(middle_Index, 0, "Musaab");
console.log("\n");
for (var _a = 0, guest_list_2 = guest_list; _a < guest_list_2.length; _a++) {
    var name_2 = guest_list_2[_a];
    console.log(name_2, inivitation);
}
