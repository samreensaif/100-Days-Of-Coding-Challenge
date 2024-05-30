


// /*3. Name Cases: Store a person’s name in a variable, and then print that person’s name
//  in lowercase, uppercase, and titlecase.
//  */
let personName = "samreen ";
// console.log("lower case:", personName.toLowerCase());
// console.log("upper case:" , personName.toUpperCase()); //////

// //shows the string with one word with first letter big
console.log("titlecase:", personName.replace(/\bw/g, d  => d.toUpperCase()));

// //if there are 2 words in a name the the code will be

// let perName: string = "IMRAN kHAN"

// let lowercase= perName.toLowerCase();

// let uppercase= perName.toUpperCase();


// let titleCase=perName.split(` `).map(letter => letter.charAt(0).toUpperCase()
// +letter.slice(1).toLowerCase()).join(" ");

// console.log (lowercase)
// console.log(uppercase)
// console.log(titleCase)