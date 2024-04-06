//* Hello Admin: Make a array of five or more usernames, including the name 'admin'.

//first method: by using FOR LOOP
// list of usernames in an array

const userNames: string[]=["samreen","firzah","admin","naureen","musaab"];

//Imagine you are writing code that will print a greeting to each user
//after they log in to a website. Loop through the array, and print a greeting to each user:

for (let i: number=0; i< userNames.length; i++)

{
    if (userNames.includes("samreen",i))  //print a greeting,Hello Samreen,thank you for logging in again.
{
    console.log(`\nHello ${userNames[i]} Thankyou for logging in again.`);
}
else if(userNames.includes("firzah",i))
{
    console.log(`\nHello ${userNames[i]} Thankyou for logging in again.`);
}

//If the username is 'admin', print a special greeting, such as Hello admin,
// would you like to see a status report?

else if(userNames.includes("admin",i))
{
    console.log(`\nHello ${userNames[i]} would you like to see a status report?`);
}
else if(userNames.includes("naureen",i))
{
    console.log(`\nHello ${userNames[i]}! Thankyou for logging in again.`);
}

else if(userNames.includes("musaab",i))
{
    console.log(`\nHello ${userNames[i]}! Thankyou for logging in again.`);

}

}


//By Using Foreach method

userNames.forEach(abc => 
    {
        if (abc==="admin")
        {
            console.log(`Hello admin, would you like to see a status report?`)
        }

        else
        {
            console.log(`Hello ${abc}, thankyou for logging in again`)
        }
    })