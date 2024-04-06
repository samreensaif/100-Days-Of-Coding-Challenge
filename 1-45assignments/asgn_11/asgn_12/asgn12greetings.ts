/* 12. Greetings: Start with the array you used in Exercise 11, but instead of just 
printing each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.
 */ 

let friendsName = ["firzah" , "musaab" , "kanza" , "omar"];

let message = "How are you dear!" ;
console.log("\n");
friendsName.forEach(name => console.log(name , message));
console.log("\n");
friendsName.forEach(name => console.log(`Hello, ${name}`, message));

//by using for loop

console.log("\n");
for (let i=0;  i<friendsName.length;i++)
{

    console.log(`Hello, ${friendsName[i]}, ${message}`);

}



