//41. Magicians: Make an array of magician’s names. Pass the array to a function 
//called show_magicians(), which prints the name of each magician in the array.

let magicians_name: string[] = ["David Blaine","Doug Henning", "Criss Angel"];

function show_magicians(magician :string[] ) 
{
  magician.forEach(abc => console.log(abc))

  console.log(`\n`)  ;

//2nd method of getting array elements

for (let i =0; i<magicians_name.length;i++ ) 

{
console.log(magicians_name[i])

}
}
show_magicians(magicians_name);
