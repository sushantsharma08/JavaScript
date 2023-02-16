'use strict';

const bookings=[];

const createBooking=function(flightNum,numPassengers=1,price=1000*numPassengers){
    
    const booking={
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);

}
createBooking(423,8);
createBooking(873,2);
createBooking(911);
createBooking(461,9);
console.log(bookings);