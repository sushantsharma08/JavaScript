'use strict';

//functions
function logg() {
 console.log(`hi i am sushant`);   
}
//calling function
logg();


//example
function fruitprocessor(apples,oranges) {
    // console.log(apples,oranges);   to show how many items used.
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const applejuice = fruitprocessor(5,0);
console.log(applejuice);
const appleorangejuice = fruitprocessor(2,2);
console.log(appleorangejuice);

//function declarations vs function expressions
//we will take an exapmle of age 

// 1. function declaration
function calcAge1(birthYear) {
    return 2021-birthYear;
}
const age1 = calcAge1(2002);
console.log(age1);

// 2. function expression
const calcage2 = function (birthYear) {
    return 2021-birthYear
}
const age2 = calcage2(2001);
console.log(age2);