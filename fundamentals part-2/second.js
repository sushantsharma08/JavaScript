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

const FiveTimes = function (Num){
    return Num*5;
};

const Number = function (NoFruits){
    const Five = FiveTimes(NoFruits);
    return ` total number of fruits become ${Five}`;
};
console.log(Number(8));

// coding challange 1

function calcAverage(score1,score2,score3){
  let result = (score1 + score2 + score3)/3;
   return result;
};

const checkWinner = function (avgKoalas,avgDolphines) {
    if(avgDolphines >= 2* avgKoalas){
        console.log(`dolphines win`);
    }else if (avgKoalas >= 2* avgDolphines){
        console.log(`koalas win`);
    }else{
        console.log(`nobody won!`);
    }
};
 //test 1
let Dolphines = calcAverage(85,54,41);
let koalas = calcAverage(23,34,27);
console.log(Dolphines, koalas);
checkWinner(koalas, Dolphines);

// test 2
 Dolphines = calcAverage(44,23,71);
 koalas = calcAverage(65,54,49);
console.log(Dolphines, koalas);
checkWinner(koalas, Dolphines);


//array


const friends = ['name1','name2','name3'];
console.log(friends);

console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2]='name4';
console.log(friends);

//functions OR operators on arrays

//to add elements
//push --> adds elemets to the end of the array
friends.push('name5');
console.log(friends);
//unshift -->adds element to the start of the array
friends.unshift('name6')
console.log(friends);

//to delete OR remove elements
//pop --> removes elements from the start of the array
friends.pop();
console.log(friends);
//shift --> removes element from start of the array
friends.shift();
console.log(friends);

// indexof --> provides location of element in the array and if not present returns -1.
console.log(friends.indexOf('name1'));
console.log(friends.indexOf('name11'));

//includes --> checks if the array contains the element or not.
console.log(friends.includes('name1'));
console.log(friends.includes('name11'));

// challange 2

//by functions
function tipFor(tip){
    if (tip>50 && tip<300) {
       let total;
       total = tip*.15;
       return total;
    }else{
      let total= tip*.2;
        return total;
    }
    
};
// const Tip = calcTiptipFor(400);
// console.log(`tip is ${Tip}`);

// array

const bills = [125,555,44];

const tip =[tipFor(bills[0]),tipFor(bills[1]),tipFor(bills[2])];
console.log(tip);

//objects  -->making an object named sushant

const sushant = {
    firstName : 'Sushant',
    lastName : 'Sharma',
    Age : 2021-2002,
    job : 'student',
    friends : [ 'name1','name2','name3' ]
};

// calling info by keywords

//dot meathod
console.log(sushant.firstName);

//bracket meathod
console.log(sushant['lastName']);

// adding info by making new keywords

//dot meathod
sushant.location= 'India';
console.log(sushant.location);

//bracket meathod
sushant['insta'] = 'sushant_sharma02';
console.log(sushant.insta);