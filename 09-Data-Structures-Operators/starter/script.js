// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
//     console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time}. will be delivering soon to ${address}.  Thamkyou for ordering.`);
//   },

//   orderPasta : function(ing1 , ing2 , ing3){
//     console.log(`heres your pasta with ${ing1}, ${ing2} and ${ing3}`)
//   }
// };

// restaurant.orderDelivery({
//   time: '22:30',
//   address: "22 ab road",
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'mandir ke aage',
//   time: '22:30',
// });

// // array desructuring
// const arr = [2, 3, 4];
// const [x, y, z] = arr;

// console.log(x, y, z);

// //  skipping a element in btw
// let [a, , b] = arr;
// console.log(a, b);

// //  switching values 
// [a, b] = [b, a];
// console.log(a, b);

// // object destructuring


// // calling objects meathods
// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// const {
//   name: restrauntname,
//   categories: tag,
//   openingHours: hours,
// } = restaurant;

// console.log(restrauntname, tag, hours);

// // providing with default data
// // when data is not hard coded
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables
// let l = 10;
// let m = 20;
// const obj = { l: 40, m: 90, n: 35 };

// ({ l, m } = obj);
// console.log(l, m);

// // nested objects
// // getting opening times on friday for the restraunt

// const {
//   fri: { open: o, close: c }
// } = openingHours;

// console.log(o, c);

// // SPREAD operator (...)

// const array1 = [1, 2, 3, 4, 5, 6];
// const array2 = [7, 8, 9, 0];
// console.log(...array1);
// const modifiedArray = [...array1, 7];
// console.log(modifiedArray);
// const addedArray = [...array1, ...array2];
// console.log(addedArray);

// const str = "Sushant";
// console.log(str);  //printing string
// console.log(...str); // printing elements of strings

// // challange 

// const main = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(main);

// // 


// //orderpasta  ---->>>>
// restaurant.orderPasta(...ingredients);



// // sets

// let orderSet= new Set(['hello', 'tetsing']);

// orderSet.add(2);
// console.log(orderSet.has(2));
// console.log(orderSet.has(3));
// orderSet.delete(2);
// console.log(orderSet);

// // for(let item of orderSet){
// //   console.log(item);
// // }


// // rest

// const [q,p,...others] = [1,2,3,4,5,6];
// console.log(q,p,others);



// // short circuiting : 


// //OR
// console.log(undefined|| ""|| 0 || "hello");

// let isPresent = true;
// let count=0
// let attendance = isPresent? count+1: count;
// console.log(attendance);

// attendance = count+1||count;
// console.log(attendance);


// console.log("------X- AND -X-------");

// let isTrue=0;

// if (isTrue) {
//   isTrue+10;
//   console.log(isTrue);
// }


// console.log(isTrue&&isTrue+10);

// console.log(count&& null);


// //nullish operator


// console.log("------X- Nullish -X-------");
// console.log(count??++count);
// console.log(null??count);

// console.log("------X- FOR-OF lOOP -X-------");

const names = ['sushant', 'sparsh', 'mohit', 'utkarsh']

for (let item of names.entries()) {
  console.log(item[0] + 1 + ":" + item[1]);
}

//enhanced object literals

const jobsvailable = {
  software: "Software Engineers",
}

const company = {
  name: "hellBound",
  profits: 260,
  // postsSoftware:jobsvailable
  jobsvailable
}
console.log(company);

for (const name of names) {
  console.log(name);
}


// if(restaurant.openingHours.mon){
//   console.log(restaurant.openingHours.mon.open);
// }

// console.log(restaurant.openingHours?.mon?.open)


// const days = ['mon','tue','wed','thu','fri','sat','sun'];

// for(const day of days){
//   const open = restaurant.openingHours[day]?.open ?? 'closed' ;
//   console.log(`on ${day}, we open at ${open}`);
// }
// for(const day of Object.keys(openingHours)){
//   console.log(day);
// }
// console.log(Object.keys(restaurant));
// console.log(Object.values(restaurant));
// console.log(Object.entries(restaurant));

// for(const [key , {open,close}] of Object.entries(openingHours)){
//   console.log(`on ${key} we open at ${open} and close at ${close}` );
// }


// _____________________challange1_________________________________
console.log(`_____________________challange1_________________________________`);
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players
console.log(players1, players2);
const [gk1, ...feildPlayers1] = players1
console.log(`Team 1 : 
goalkeeper : ${gk1},
feildPlayers : ${feildPlayers1}`);
const [gk2, ...feildPlayers2] = players2
console.log(`Team 2 : 
goalkeeper : ${gk2},
feildPlayers : ${feildPlayers2}`);
const allPlayers = [...players1, ...players2]
console.log(allPlayers)
const players1Final = [...players1, 'thiago', 'Coutinho', 'perisic']
console.log(players1Final);
const { team1, x: draw, team2 } = game.odds
console.log(team1, draw, team2);

const printgoals = function (...players) {
  console.log(players.length + ' ' + 'goals were scored');
  for (const name of players) {
    console.log(name);
  }
}
printgoals('Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels');

// _____________________challange1_________________________________
console.log(`_____________________challange2_________________________________`);

for (const [i, players] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${players} `);
}

let totalodd = 0;

for (const [team, odd] of Object.entries(game.odds)) {
  console.log(` ${team} has, ${odd} odds`);
  totalodd = totalodd + odd;
}
console.log(game.team1);
const avg = totalodd / 3
console.log(avg);

console.log(`________________________________________SETS____________________________________________________`);

const thisset = new Set(['hello', 'hi', 'hello', 'hi', 'hello', 'hi']);
console.log(thisset);

console.log(thisset.has('newstring'));
console.log(thisset);
thisset.add('newstring');
console.log(thisset);
console.log(thisset.has('newstring'));
thisset.delete('hi');
console.log(thisset);
console.log(thisset.has('hi'));

let arraytest = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
// const arrayset=arraytest.Set();
const arrayset = new Set(arraytest)
console.log(arrayset);

const settoArray = [];
for (const item of arrayset) {
  console.log(item);
  settoArray.push(item);
} console.log(settoArray);

console.log(`________________________________________Maps____________________________________________________`);
const rest = new Map();
rest.set('name', "shabnam da dhabaa");
rest.set(1, "paneer");
rest.set(2, "daal");
rest.set('open',11).set('closed',23);
rest.set(true,"we are open").set(false,"we are closed");
console.log(rest);
console.log(rest.get('name'));

rest.set(3, "roti")
  .set(4, 'loki');
console.log(rest);
console.log(rest.has('name'));
rest.delete(3)
console.log(rest);
console.log(rest.size);

const time = 21;
console.log(rest.get(time>=rest.get('open')&& time<=rest.get('closed')));

