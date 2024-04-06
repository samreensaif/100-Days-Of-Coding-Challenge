var personName = "samreen ";
console.log("lower case:", personName.toLowerCase());
console.log("upper case:", personName.toUpperCase());
//shows the string with one word with first letter big
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
//if there are 2 words in a name the the code will be
var perName = "IMRAN kHAN";
var lowercase = perName.toLowerCase();
var uppercase = perName.toUpperCase();
var titleCase = perName.split(" ").map(function (letter) { return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase(); }).join();
console.log(lowercase);
console.log(uppercase);
console.log(titleCase);
/*
if(perName != null && perName !=``)
{
    alert(`${perName}, Here your name in 3 cases:
    lower case: ${lowercase}\n
    UPPER CASE: ${uppercase}\n
    Title Case: ${titleCase}`)

}

else{
   alert ("Please fill your name: ");
}

*/
