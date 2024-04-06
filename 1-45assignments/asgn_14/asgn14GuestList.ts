/*14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner.
*/

let guest_list = ["Saif","Naureen","Zeenat","Ayaz"];

let inivitation = "I would like to invite you at Dinner on Monday 8:00 P.M. sharp.";
console.log("\n");
guest_list.forEach( abc => console.log(`Hello, ${abc}`, inivitation));
//2nd method
console.log("\n");

for (let name of guest_list)

{
 console.log (name, inivitation)
}

