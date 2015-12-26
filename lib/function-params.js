"use strict";

/*
    Set defaults for functions
*/
function addition(x) {
    var y = arguments.length <= 1 || arguments[1] === undefined ? 12 : arguments[1];

    return x + y;
}

console.log(addition(2));

/* 

    REST  - multiple arguments to be passed in as an Array

    arguments after z are an array of arugments 
    specified with `...` notation 

    - args.length returns undefined is no operations is operated on it.

 */

function append() {
    return arguments.length <= NaN || arguments[NaN] === undefined ? undefined : arguments[NaN];
}

var wArray = append("hello", "world");
console.log(wArray);
// console.log(typeof wArray);

/* 
    SPREAD - split an array to single arugments
*/

function sum(x, y, z) {
    return x + y + z;
}

var numbers = [1, 5, 3, 7];

console.log(sum.apply(undefined, numbers));