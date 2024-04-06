// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
let laptop = {
    make: " HP",
    model: "eliteBook",
    year: 2024,
    describe: function () {
        console.log(`This Laptop is ${laptop.make} model ${laptop.model} makes in the year ${laptop.year}`);
        console.log(`this laptop is ${this.make} ${this.model} in year ${this.year}`);
        console.log(this.make, this.model, this.year);
    }
};
laptop.describe();
export {};
