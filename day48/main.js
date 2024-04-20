// // Day 48 Challenge: Start Coding! 🚀
// // Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
console.log(`\n\n\t\t\tDay 48 Challenge:\n
\t\tQuestion 142: Promises in JAVAscript`);
let promise = new Promise((resolve) => //// Creates a Promise 
 {
    setTimeout(() => {
        resolve(`\nHello, World!!!`);
    }, 2000);
});
// After 2 seconds, "Hello, World!" will be logged to the console. 
promise.then((message) => console.log(message));
// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
console.log(`\n\n\t\tQuestion 143: Use of .then() && .catch()`);
let AsyncPromise = new Promise((resolve, reject) => {
    let m = Math.random();
    console.log(m); // log the value of Math.random just to confirm
    let success = m > 0.5;
    if (success) {
        resolve(`success!!`);
    }
    else {
        reject(`failure!!`);
    }
});
AsyncPromise.then((msg) => // if success then print .then(msg)
 {
    console.log(msg);
})
    .catch((error) => {
    console.log(error); //if failue the .catch(msg)
});
// Question 144: Explain the use of the Promise.all() method with an example.
console.log(`\n\n\t\tQuestion 144: Use of Promise.all()`);
let function1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`successfull-1`);
        }, 2000);
    });
};
let function2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`successfull-2`);
        }, 2000);
    });
};
let function3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`successfull-3`);
        }, 2000);
    });
};
Promise.all([function1(), function2(), function3()])
    .then((msg) => { console.log(msg); })
    .catch((error) => { console.log(error); });
export {};
