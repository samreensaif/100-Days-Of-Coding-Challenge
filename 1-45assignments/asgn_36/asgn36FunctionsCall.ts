// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a 
// message that should be printed on the shirt. The function should print a sentence summarizing
// the size of the shirt and the message printed on it.
// Call the function.

function t_Shirt( size: string, msg:string ) 
{
    console.log( `\nCreating a ${size} size of t-shirt  with message : ${msg}`);
   
}

// call a function
t_Shirt("small","I AM PAKISTANI\n");

t_Shirt("medium","I AM PAKISTANI\n");

t_Shirt("large","I AM PAKISTANI\n");

//another example of Function declaration

function test_param(n1 : number, s1: string ) 
{
    console.log(n1);
    console.log(s1);
   }
   test_param(123, "this is a string");
   