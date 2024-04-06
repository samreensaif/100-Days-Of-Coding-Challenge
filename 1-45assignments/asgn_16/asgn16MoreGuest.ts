
/* More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.
*/
let guest_list = ["Saif","Naureen","Zeenat","Ayaz"];
// informin guest that i got bigger space for party
//let newguest_list = ["Saif","Naureen","Zeenat","Ayaz;"];

let inivitation = "good new!its bigger table now";
//add new guest at first 
guest_list.unshift("Omar");

guest_list.push("Kanza");  //add new guest at last

for (let name of guest_list){

    console.log(name, inivitation)
}

//add guest in middle
let middle_Index: number = Math.floor(guest_list.length /2);

guest_list.splice(middle_Index,0, "Musaab" );

console.log("\n")

for (let name of guest_list){

    console.log(name, inivitation)
}









