/*15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.

*/



let guest_list = ["Saif","Naureen","Ayaz", "Zeenat"];  //instead of zeenat,waseem is coming


let dontCome = guest_list[3];
// type the person name  who is not coming on dinner
console.log ( dontCome, "is not coming at dinner");


//guest_list.splice( 3, 3,  "waseem "); //Modify the list by removing zeenat adding waseem

guest_list.splice( 3, 1,  "waseem ");

for (let name of  guest_list){
    console.log(name, "is coming")
}

//by using forEach we can also print the statement
//guest_list.forEach(guest => console.log(` ${guest} is coming `)); 
// remove ayaz add sani


dontCome = guest_list[2];  //another person not coming
console.log(` \n`, dontCome, ` is not coming now`);
guest_list.splice(2, 1, "sani");

for(let name of guest_list)
{
    console.log(name, "is coming now")


}
//guest_list.forEach(abc => console.log(` ${abc} is coming`)); by usin forEach we can also print 

