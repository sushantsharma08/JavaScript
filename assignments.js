//values and variables
let COUNTRY = "INDIA";
let CONTINENT = "ASIA";
let POPULATION = "1378.6";
console.log(COUNTRY);
console.log(CONTINENT);
console.log(POPULATION);
//data types
let isISLAND = "peninsula";
console.log(isISLAND);
console.log(typeof isISLAND);

isISLAND = true;
console.log("new data type value:")
console.log(typeof isISLAND);
//let const var
let language = "hindi";
console.log(language);
const pin = 91;
console.log(pin);
//pin = 0
//basic operations
console.log("half population:" + " " + POPULATION / 2);
POPULATION++;//inc population by 1 or can use pop +=1 similarly can use -= *= /=
console.log("population plus one:" + POPULATION);
let PopulationFinland = "33"
console.log("population of finaland:" + PopulationFinland);
//comPARISION OPERATOR
console.log("my country's population more than findland's population");
console.log("my country's population more than findland's population" + POPULATION > PopulationFinland);
let AvgPopulation = 33;
console.log("my country's population is less than or equal to avg population of country");
console.log(POPULATION <= AvgPopulation);
let Description = 'Portugal is in Europe, and its 11 million people speak portuguese';
console.log(Description);
//challenge #1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
const markBMI = markMass / (markHeight ** 2)
const johnBMI = johnMass / johnHeight ** 2
console.log(markBMI);
console.log(johnBMI);
const markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI);
//  to add more liness in console we can use two ways 
//  1. using \n\ to break liness
//  2. using ``(backtick) and typing as you waant it to be
// *using ${variableName} makes it more easier to write for consol as no  need to add + sign repeatedly*
// example for above data from below line
 const mark = "mark" + " is " + markMass + "kgs " + "in weight " + "and is " + markHeight + " meters " + "in height."
 console.log(mark);
 const newMark =`mark is ${markMass}kgs in weight and is ${markHeight} meters in height.`
 console.log(newMark);
 //now for the same lines applying line break with the two different ways
 console.log("string with multiple lines");
 console.log("string with \n\multiple\n\lines");
 console.log(`string with 
multiple 
lines`);
/*if/else for a driving license
format: if() {

} else{

}*/
const age = 18;
if(age>=18) {
 console.log(`sushant is eligible for driver's license`);
 alert (`sushant is eligible for license`)
} else{
    const YearsLeft = 18-age;
 console.log( `sushant is too young, wait ${YearsLeft} years`);
}
//challange #2
if(markBMI<johnBMI) {
console.log(`mark's BMI (${markBMI})is less than john's BMI (${johnBMI})`);
} else{
    console.log(`mark's BMI (${markBMI})is higher than john's BMI (${johnBMI})`);
}
//type conversion
//type needed to be set by defaut
//example: consol.log(string(45),30); here the user has to declare that 45 is string variable type
//*type coercion*
//type JS sets by itself
//example.1: console.log('i am '+45+' yrs old'); in '+' oprator the variables are always considered a string,so no need for qoutes(').
//exampe.2 console.log('33'-'3'-'10'); in (-)oprator the variables are assigned number type variables so even if qoutes are there they are treated as Number.
// other operators like (*) multiplication (/)division and other comparision operators like (<,>,<=,>=) act similar to substraction.


//falsy values: those elements whose boolean values are false. 
//these 5 elemnts obtain a false value : 0 ,( '' ) empty string , undefined , null , NaN;
//example
//truthy value : those elements whose boolean values are true.
//generally all elements or variables having some kind of data are considered true 
let money;
format: if(money) {
console.log(`good keep it up and improve`);
} else{
console.log(`get a job`);
}
//equality operators == & ===
// == is a coercion type operator and chooses variable type by itself.
// whereas, === is a conversion type and variables need to be defined.
//example for a favourite number :
const favourite = prompt(`what is your favourite number?`);
 console.log(favourite);
 if(favourite == 8) {
     console.log(`8 is a good number but considered string for now`);
     console.log(typeof favourite);
 } //this shows == is a loose operator and gets value even when type is not defined so (a string) '8'== (a number) 8
  //now lets see for ===
 favouriten = Number(prompt(`what is your favourite number?`));
 console.log(favouriten);
 if(favouriten === 8) {
     console.log(`8 is a good number but considered as a number now`);
     console.log(typeof favouriten);
 } //now if you enter a value of string and compare with number it will give a false value ex: '8'===8 is a false 
 //also here we defined the variable type by number() format before prompt.


 //boolean value : truth table and concept of NOT
 /*when both true*/
 const hasDriversLicense = true;
 const hasGoodVision = true;

 console.log(hasDriversLicense && hasGoodVision); //it is AND should be true
 console.log(hasDriversLicense || hasGoodVision); //it is OR and should be true
 
//  when one is true one is false
//     *** to make good vision false simply using ! (not) operator ***

console.log(hasDriversLicense && !hasGoodVision); //it is AND should be false
console.log(hasDriversLicense || !hasGoodVision); //it is OR and should be true


if (age>=18 && hasDriversLicense) {
    console.log(`sushant is eligible to drive`);
} else {
    console.log(`not eligible to drive`);
}
