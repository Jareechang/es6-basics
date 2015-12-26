"use strict";

// Array Matching
var _ref = [1, 3, 4];
var a = _ref[0];
var b = _ref[2];

// console.log(a);
// console.log(b);

/* 
   Fail-soft destructuring with defaults 
       - Could assign default values for the variables in destructuring 
       - 
*/

var _ref2 = [5];
var _ref2$ = _ref2[0];
var c = _ref2$ === undefined ? 1 : _ref2$;
var _ref2$2 = _ref2[1];
var d = _ref2$2 === undefined ? 2 : _ref2$2;
// console.log(c);
// console.log(d);

// Object matching

function today() {
    var dateToday = new Date();
    return {
        d: dateToday.getDay(),
        m: dateToday.getMonth(),
        y: dateToday.getFullYear()
    };
}

var _today = today();

var month = _today.m;
var year = _today.y;

// console.log(month);
// console.log(year);

// Destructuring while passing params into functions

var person = {
    firstName: "Joe",
    lastName: "Blue",
    age: 21,
    gender: "M"
};

function getFullName(_ref3) {
    var fname = _ref3.firstName;
    var lname = _ref3.lastName;

    return fname + " " + lname;
}

console.log(getFullName({ firstName: person.firstName, lastName: person.lastName }));