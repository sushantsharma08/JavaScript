'use strict';

function calcAge(birthYear){
    const age = 2027 - birthYear;

    function printAge(){
        const output = `${firstName}, You are ${age}, born in ${birthYear}`
        console.log(output);

        if(birthYear>=1981 && birthYear<=1991){
            var millenial = true
            const str = `oh, you are a millenial,${firstName}`;
            console.log(str);
        }else{
            millenial= false
            const str2 = `oh, you are not a millenial,${firstName}`;
            console.log(str2);
            console.log(age);
        }
        // console.log(str);
        console.log(`millenial : ${millenial}`);

        function second() {
            console.log(millenial);
            // console.log(str2);  //refference error
        }
        second();
    }
    printAge();

        return age;        
}

const firstName= "sushant"
calcAge(2002);