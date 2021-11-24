'use strict';

//functions
function logg() {
    console.log(`hi i am sushant`);
}
//calling function
logg();


//example
/*function fruitprocessor(apples,oranges) {
    // console.log(apples,oranges);   to show how many items used.
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const applejuice = fruitprocessor(5,0);
console.log(applejuice);
const appleorangejuice = fruitprocessor(2,2);
console.log(appleorangejuice);*/ //commented coz going to use same function for function calling function (line 50)

//function declarations vs function expressions
//we will take an exapmle of age 

// 1. function declaration
function calcAge1(birthYear) {
    return 2021 - birthYear;
}
const age1 = calcAge1(2002);
// console.log(age1);

// 2. function expression 
const calcage2 = function (birthYear) {
    return 2021 - birthYear
}
const age2 = calcage2(2001);
// console.log(age2);

console.log(age1, age2);

//arrow function 
const yearsUntilRetirement = (birthYear, Firstname) => {
    const age = 2021 - birthYear;
    const retirement = 60 - age;
    return `${Firstname} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(2002, 'sushant'));

//function calling function 
//first function
function cutFruitPieces(fruit) {
    return fruit * 4 // as the fruit needs to be cut into 4 peices before fruitprocessor
}
//second function
function fruitprocessor(apples, oranges) {
    const applepieces = cutFruitPieces(apples);
    const orangepieces = cutFruitPieces(oranges);
    return `juice with ${applepieces} pieces of apples and ${orangepieces} pieces of oranges.`
}
console.log(fruitprocessor(23, 5));  
