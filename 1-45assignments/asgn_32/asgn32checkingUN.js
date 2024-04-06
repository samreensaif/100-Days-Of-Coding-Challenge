"use strict";
//32. Checking Usernames: Do the following to create a program that simulates how websites ensure that
//everyone has a unique username.
//Make a list of five or more usernames called current_users.
let current_Users = ["pakistan123", "SAMREENSAIF", "syedanaureen", "FirzahFatima", "syedmusaab", "helloworld"];
// change array elements in lowercase
let current_Users1 = current_Users.map(abc => abc.toLowerCase());
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are 
//also in the current_users list.
let new_Users = ["samreensaif", "syedanaureen", "syedomar", "HELLoWorld", "ayazanwar", "PAKISTAN123"];
//change array elements in lowercase
let new_Users1 = new_Users.map(abc => abc.toLowerCase());
//Loop through the new_users list to see if each new username has already been used. 
for (let i = 0; i < new_Users1.length; i++) {
    let element = new_Users1[i];
    if (current_Users1.includes(element)) {
        console.log(new_Users[i], "is not available so the person will need to enter a new username. ");
    }
    else //if(new_Users[i] != current_Users[i])
     {
        console.log(new_Users[i], "  is available. ");
    }
}
console.log(`\n\n 2nd method of solving this question`);
//second method
let c_username = [`Abdul`, `maHa`, `kashif`, `SAMAD`];
let n_username = [`KaraCHi123`, `Saif`, `abdul`, 'saMAd', `giaic`];
n_username.forEach(n_user => {
    let lowercase = n_user.toLowerCase();
    if (c_username.map(c_user => c_user.toLowerCase()).includes(lowercase)) {
        console.log(n_user, `: is already present so the person needs to enter another username`);
    }
    else {
        console.log(n_user, `is avaiable`);
    }
});
