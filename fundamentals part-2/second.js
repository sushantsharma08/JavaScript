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
// const calcTip = function tipFor(tip){
//     if (tip>50 && tip<300) {
//        let total;
//        total = tip*.15;
//        return total;
//     }else{
//       let total= tip*.2;
//         return total;
//     }
    
// };
// const Tip = calcTiptipFor(400);
// console.log(`tip is ${Tip}`);

// array

// const bills = [125,555,44];

// const tip =[tipFor(bills[0]),tipFor(bills[1]),tipFor(bills[2])];
// console.log(tip);

// //objects  -->making an object named sushant

const sushant = {
    firstName : 'Sushant',
    lastName : 'Sharma',
    Age : 2021-2002,
    job : 'student',
    friends : [ 'name1','name2','name3' ],
    hasDriversLicence : true,
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

//object meathod : this.

//making a function to calc age without this.

// const name = {
//     firstName : 'n1',
//     lastName : 'nL',
//     birthyear : 2002,
//     job : 'student',
//     friends : [ 'name1','name2','name3' ],

//      calculateAge : function (birthyear) {
//         const result = 2021-birthyear;
//          return result;
//      }
// };
// console.log(name.calculateAge(2002));

// here we had to give the birthyear and it can be wrong if not given carefully. so we now use this keyword to take birthyear from object itself


// const name = {
//     firstName : 'n1',
//     lastName : 'nL',
//     birthyear : 2002,
//     job : 'student',
//     friends : [ 'name1','name2','name3' ],

//      calculateAge : function () {
//         const result = 2021-this.birthyear;
//          return result;
//      }
// };
// console.log(name.calculateAge());

// here we used this keyword and did the job without giving birthyear again.

// now we will make a new variable named age inside the object itself using this keyword for age.

const name = {
    firstName : 'n1',
    lastName : 'nL',
    birthyear : 2002,
    job : 'student',
    friends : [ 'name1','name2','name3' ],

     calculateAge : function () {
        this.Age = 2021-this.birthyear;
         return;
     }
};
console.log(name.calculateAge());
console.log(name.Age);
// here we made a new variable inside the object itself using 

//challange
//sushant is a 19 year old boy who has a/no drivers licence.
const challange = {
    firstName : 'Sushant',
    lastName : 'Sharma',
    Age : 2021-2002,
    job : 'student',
    friends : [ 'name1','name2','name3' ],
    hasDriversLicence : false,

    getSummary : function() {
        return `${this.firstName} is a ${this.Age} year old ${this.job} who ${this.hasDriversLicence ? `has a drivers licence` : `has no drivers licence`}`
    }
};
 console.log(challange.getSummary());

 // challange //#3
 
 const john = {
     fullName : 'john smith',
     Height : 1.69,
     Mass : 78,

     calcBmi : function(){
            this.BMI = this.Mass/(this.Height*this.Height);
            return ; 
     }
 };

 
 const mark = {
     fullName : 'Mark Miller',
     Height : 1.95,
     Mass : 92,
     
     calcBmi : function(){
         this.BMI = this.Mass/(this.Height*this.Height);
         return ; 
        }
    };


    console.log(mark.calcBmi());
    console.log(`BMI of ${mark.fullName} is ${mark.BMI}`);
    console.log(john.calcBmi());
    console.log(`BMI of ${john.fullName} is ${john.BMI}`);


    // itterations 
    //for loop
    for( let rep = 1; rep<=10 ; rep++){
        console.log(`dumbell count ${rep}`);
    }

    // now logging whole array to 
    // first making a array 
    const SushantArray = [
        'Sushant',
        'sharma',
        2021-2002,
        'student'
    ];

    for( let i=0 ; i<SushantArray.length ; i++){
        console.log(SushantArray[i] , typeof SushantArray[i]);
    };

    // make a array named years and a empty array named ages and store calculated ages into this array using loops

    const years = [1999,2000,2001,2002,2003];
    const age = [];

    for (let i = 0; i < years.length; i++) {
            // age[i] = (2021 - years[i]); or you can use push
            age.push(2021-years[i]);  
            console.log(years[i],age[i]);     
    };
    console.log(years);
    console.log(age);


    // continue And break statements
console.log(`<--- ONLY STRING --->`);
for (let i = 0; i < SushantArray.length; i++) {
    if (typeof SushantArray[i] !== 'string') continue;
    console.log(SushantArray[i] , typeof SushantArray[i]);
    
};

console.log(`<--- BREAKS AT NUMBER --->`);
    for (let i = 0; i < SushantArray.length; i++) {
        if (typeof SushantArray[i] === 'number') break;
        console.log(SushantArray[i] , typeof SushantArray[i]);
        
    };

  // challange 4
   const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
   const tips = [];
   const total = [];

   
   const calcTip = function(tip){
    if (tip>50 && tip<300) {
       let total;
       total = tip*.15;
       return total;
    }else{
      let total= tip*.2;
        return total;
    }
    
};

   for (let i = 0; i < bill.length; i++) {

       tips.push(calcTip(bill[i]));
       total.push(bill[i]+tips[i]);
   };
   console.log(tips);
   console.log(total);