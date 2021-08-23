'use strict';

//functions
function logg() {
 console.log(`hi i am sushant`);   
}
//calling function
logg();
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