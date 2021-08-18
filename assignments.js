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