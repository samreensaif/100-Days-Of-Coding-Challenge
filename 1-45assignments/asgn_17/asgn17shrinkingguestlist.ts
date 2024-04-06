

//instead of zeenat,waseem is coming

let guest_list = ["Saif","Naureen","Ayaz", "Zeenat"];

//let inivitation = "I would like to invite you at Dinner on Monday 8:00 P.M. sharp.";

//guest_list.forEach( abc => console.log(`Hello, ${abc}`, inivitation));

let dontCome = guest_list[3];
// type the person name  who is not coming on dinner
console.log ( dontCome, "is not coming at dinner");
//remove zeenat add waseem
guest_list.splice( 3, 3,  "waseem ");

guest_list.splice( 3, 1,  "waseem ");

guest_list.forEach(guest => console.log(` ${guest}, is coming now`));
// remove ayaz add sani


dontCome = guest_list[2];
console.log(` \n`, dontCome, ` is not coming now`);
guest_list.splice(2, 1, "sani");

guest_list.forEach(abc => console.log(`salaam, ${abc}, is coming`));


//let guest_list = ["Saif","Naureen","Zeenat","Ayaz","Firzah","Musaab","Kanza","Omar"];
// informin guest that i got bigger space for party
//let newguest_list = ["Saif","Naureen","Zeenat","Ayaz;"];

let inivitation = "good new!its bigger table now";
//add new guest at first 
guest_list.unshift("Omar");

//add new guest at last

guest_list.push("Kanza");


guest_list.forEach(abc => console.log( abc ,inivitation));
guest_list.forEach(abc => console.log(abc));

//add guest in middle
let middle_Index: number = Math.floor(guest_list.length /2);

guest_list.splice(middle_Index,0, "Musaab" );

guest_list.forEach(abc => console.log("\n\t", abc,inivitation));

//informing guest about shrinking guest list as new dinner table wont arrive on time

let shrinkingGuest: string = "Bad News! Only 2 guest allowed. ";
//guest_list.forEach(abc => console.log(abc,shrinkingGuest));
//removing guest from guest list

let sorryMsg: string = "I am very sorry, you can't come as the new dinner table is cancelled.";

//1st method

/*/removes Kanza
let deleted_guest = guest_list.pop();
console.log(`\n\t ${deleted_guest},${shrinkingGuest}${sorryMsg}`);
//removes waseem
let deleted_guest1 = guest_list.pop();
console.log(`\n\t ${deleted_guest1},${shrinkingGuest}${sorryMsg}`);
//removes sani
let deleted_guest2 = guest_list.pop();
console.log(`\n\t ${deleted_guest2},${shrinkingGuest}${sorryMsg}`);

//removes musaab
let deleted_guest3 = guest_list.pop();
console.log(`\n\t ${deleted_guest3},${shrinkingGuest}${sorryMsg}`);

//removes naureen
let deleted_guest4 = guest_list.pop();
console.log(`\n\t ${deleted_guest4},${shrinkingGuest}${sorryMsg}`);

//new guest list
guest_list.forEach(abc => console.log(`\nDear`, abc,`you are still invited\n` ));

//removes the last 2 guest from the guest list
let deleted_guest5 = guest_list.pop();
let deleted_guest6 = guest_list.pop();

console.log(`\nguest_list is empty now ${guest_list}`, "\n\n none of you are coming now");
*/

// 2nd method by using while and for loop
while(guest_list.length>2)
{
   let remove= guest_list.pop()

   console.log(`${shrinkingGuest}`, remove, sorryMsg);
}


for (let i = 0; i< guest_list.length;i++)
{
    console.log(guest_list[i], ` you are still invited`)
}