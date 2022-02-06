'use strict';

// function calcAge(birthYear){
//     const age = 2027 - birthYear;

//     function printAge(){
//         const output = `${firstName}, You are ${age}, born in ${birthYear}`
//         console.log(output);

//         if(birthYear>=1981 && birthYear<=1991){
//             var millenial = true
//             const str = `oh, you are a millenial,${firstName}`;
//             console.log(str);
//         }else{
//             millenial= false
//             const str2 = `oh, you are not a millenial,${firstName}`;
//             console.log(str2);
//             console.log(age);
//         }
//         // console.log(str);
//         console.log(`millenial : ${millenial}`);

//         function second() {
//             console.log(millenial);
//             // console.log(str2);  //refference error
//         }
//         second();
//     }
//     printAge();

//         return age;        
// }

// const firstName= "sushant"
// calcAge(2002);

// console.log(me);
// // console.log(name);
// // console.log(age);

// var me = 'me';
// let name = 'sushant';
// const age = '19';

// //functions 

// console.log(addDecl(5,6));
// // console.log(addExp(9,0));
// console.log(ArrowAdd(8,8));

// // function declaration
// function addDecl(a,b){
//     return a+b;
// };

// //function expression
// const addExp = function(a,b){
//     return a+b;
// }

// // Arrow function
// const ArrowAdd = (a,b) => a+b;

console.log(this);

const age = function(birthYear){
    console.log(2022-birthYear);
    console.log(this);
};
age(2002);


const ageArrow = birthYear =>{
    console.log(2022-birthYear);
    console.log(this);
};
ageArrow(2001);