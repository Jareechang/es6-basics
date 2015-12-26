/*
    Set defaults for functions
*/
function addition(x, y = 12) {
    return x + y;
}

console.log(addition(2));

/* 

    REST  - multiple arguments to be passed in as an Array

    arguments after z are an array of arugments 
    specified with `...` notation 

    - args.length returns undefined is no operations is operated on it.

 */ 

function append(...args) {                
    return (args).length;
}

var wArray = append("hello", "world");
console.log(wArray);
// console.log(typeof wArray);


/* 
    SPREAD - split an array to single arugments
*/

function sum(x,y,z) {
    return x + y +z;
}

var numbers = [1,5,3,7];

console.log(sum(...numbers))