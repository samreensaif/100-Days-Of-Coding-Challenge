"use strict";
//export function  ....default exports
export function sumFunction(num1, num2) {
    return num1 + num2;
}
//export class
export class laptop {
    brand;
    price;
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}
//named exports vs default exports
export const MAX_PRICE = 2000;
export const BEST_Laptop = "Hewlett Packard";
