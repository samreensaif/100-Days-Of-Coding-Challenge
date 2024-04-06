//No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// list of usernames in an array

let userNames: any[]=["samreen","firzah","admin"];

if ( userNames.length === 0)  //make sure list of user is  empty
{
    console.log("\nList Of username is empty, we need to find some users");
}

else                          // if array of username is not empty
{
    console.log("list of username is not empty!")
}

// now print the message with empty array
 userNames = [];


if ( userNames.length != 0)  //make sure list of user is not empty
{
    console.log("\nList Of username is not empty");
}

else                          // if array of username is empty
{
    console.log("\nWe need to find some users!")
}