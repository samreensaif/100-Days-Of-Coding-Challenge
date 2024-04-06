"use strict";
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
//Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/* Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

*/
let ordinalNum; // take variable but not assign value
for (let num1 of num) {
    if (num1 == 1) {
        ordinalNum = "st"; //redeclare variable and assign value st here
    }
    else if (num1 == 2) {
        ordinalNum = "nd"; //redeclare variable and assign value nd here
    }
    else if (num1 == 3) {
        ordinalNum = "rd"; //redeclare variable and assign value rd here
    }
    else {
        ordinalNum = "th"; //redeclare variable and assign value th here
    }
    console.log(num1 + ordinalNum);
}
