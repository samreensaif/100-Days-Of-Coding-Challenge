/*13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
and make a list that stores several examples. Use your list to print a series of statements about
 these items, such as “I would like to own a Honda motorcycle.”
*/
let fav_Transprt = ["car","cycle","sportsbike","ship"];
let message = " i would like to own a";
//1st method
console.log("\n");
fav_Transprt.forEach(mode => console.log(message , mode));
console.log("\n");
fav_Transprt.forEach(mode => console.log(`wow ${message} `, mode) );
console.log("\n");
//second method

for( let i=0; i<fav_Transprt.length; i++)
{
console.log(message, fav_Transprt[i])

}
console.log("\n");
//3rd method
for (let name of fav_Transprt)

{
    console.log(message, name)
}

