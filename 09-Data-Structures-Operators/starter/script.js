'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
    console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time}. will be delivering soon to ${address}.  Thamkyou for ordering.`);
  },

  orderPasta : function(ing1 , ing2 , ing3){
    console.log(`heres your pasta with ${ing1}, ${ing2} and ${ing3}`)
  }
};

restaurant.orderDelivery({
  time: '22:30',
  address: "22 ab road",
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'mandir ke aage',
  time: '22:30',
});

// array desructuring
const arr = [2, 3, 4];
const [x, y, z] = arr;

console.log(x, y, z);

//  skipping a element in btw
let [a, , b] = arr;
console.log(a, b);

//  switching values 
[a, b] = [b, a];
console.log(a, b);

// object destructuring


// calling objects meathods
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

const {
  name: restrauntname,
  categories: tag,
  openingHours: hours,
} = restaurant;

console.log(restrauntname, tag, hours);

// providing with default data
// when data is not hard coded
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let l = 10;
let m = 20;
const obj = { l: 40, m: 90, n: 35 };

({ l, m } = obj);
console.log(l, m);

// nested objects
// getting opening times on friday for the restraunt

const {
  fri: { open: o, close: c }
} = openingHours;

console.log(o, c);

// SPREAD operator (...)

const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [7, 8, 9, 0];
console.log(...array1);
const modifiedArray = [...array1, 7];
console.log(modifiedArray);
const addedArray = [...array1, ...array2];
console.log(addedArray);

const str = "Sushant";
console.log(str);  //printing string
console.log(...str); // printing elements of strings

// challange 

const main = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(main);

const ingredients = [prompt('let\'s make pasta! ingredient 1 ?'),
prompt('let\'s make pasta! ingredient 2 ?'),
prompt('let\'s make pasta! ingredient 3 ?')];

//orderpasta  ---->>>>
restaurant.orderPasta(...ingredients);



// sets

let orderSet= new Set(['hello', 'tetsing']);

orderSet.add(2);
console.log(orderSet.has(2));
console.log(orderSet.has(3));
orderSet.delete(2);
console.log(orderSet);
  
// for(let item of orderSet){
//   console.log(item);
// }


// rest

const [q,p,...others] = [1,2,3,4,5,6];
console.log(q,p,others);
