//Large Shirts: Modify the make_shirt() function so that shirts are large by default with 
//a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
//and a shirt of any size with a different message.

function make_shirt(size: string="L", msg: string = "I Love TypeScript")
{
 
    console.log(`creating a ${size} size shirt with a msg ${msg}`)


}

make_shirt();
make_shirt("M")
make_shirt("S","I am Pakistani")