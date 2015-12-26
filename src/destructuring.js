// Array Matching 
var [a, ,b] =  [1,3,4];

// console.log(a);
// console.log(b);

 /* 
    Fail-soft destructuring with defaults 
        - Could assign default values for the variables in destructuring 
        - 
*/

 var [c = 1, d = 2] = [5];
 // console.log(c);
 // console.log(d);



// Object matching 
function today(){
    let dateToday = new Date();
    return  {
        d: dateToday.getDay(),
        m: dateToday.getMonth(),
        y: dateToday.getFullYear() 
    }
}

var { m: month, y: year} = today();

// console.log(month);
// console.log(year);


// Destructuring while passing params into functions 
let person = {
    firstName: "Joe",
    lastName: "Blue",
    age: 21,
    gender: "M"
}

function getFullName({ firstName: fname, lastName: lname }) {
    return `${fname} ${lname}`;
}

console.log(
    getFullName({firstName: person.firstName, lastName: person.lastName })
);
