// Example of Generators 

/* 
*   1.  Take() function, converts sequence of iterated values into a 
*       sequence of length n:
*/

import "babel-polyfill";

// function * take(n, iterable) {
//     for(let x of iterable) {
//         if(n <= 0) return; 
//         n--; 
//         yield x; 
//     }
// }

// let arr = ["bill", "bob", "dilly", "silly", "milly", "gilly"];

// for(let x of take(2, arr) ) {
//     console.log(x);
// }


/* 
*   take implmentation with iterators
*/

function take(n, iterable) { 
    let iter = iterable[Symbol.iterator]();
    [Symbol.iterator]() {
        return this;
    },
    next() {
        if (n < 0 ) {
            n--;
            return iter.next();
        } else {
            iter.return();
            return { done: true };
        }
    },
    return() {
        n = 0;
        iter.return();
    }
}

