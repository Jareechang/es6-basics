// let addOne  = {
//     [Symbol.iterator]() {
//         let value=0; 
//         return  {
//             next() {
//                 value ++;
//                 return { done: false , value: value}
//             }
//         }
//     }
// }

// for (var n of addOne) {
//     if (n > 5)
//         break;
//     console.log(n);
// }



/* Working through examples within 2ality Blog on iterators 
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––*/
/*
    Plain objects are not iterable 

        - You can make most objects iterable by adding a method 
        [Symbol.iterator]() to object prototype but they would lose this
        ability in two cases: 

     Case # 1
        • If they are created via Object.create(null). Then the Object.prototype is 
        not in their prototype chain. 
*/

    var object = Object.create(null); 

    console.log(object.prototype); // undefined


/*  Case # 2 
        •  If they are data structures. Then they need iterability for their data.
            You can't later add a iterability to an existing class, because 
            that would break code that iterates over the properties of their instance. */

// let obj =  {first: 'Jane', second: 'Doe'};

// for(let [key, value] of objectEntries(obj)){
//     console.log(`${key}: ${value}`);
// }        
    
    /* Iterators are also iterable
    –––––––––––––––––––––––––––*/

    /* Iterators are also iterable
    –––––––––––––––––––––––––––*/


    /* Cominbator for iterables 
    –––––––––––––––––––––––––––*/
    // cominbator are functions that combine existing iterables to create new ones.

    /* 
        Let’s start with the combinator function take(n, iterable), which returns an iterable
     over the first n items of iterable.*/ 

    function take(n,iterable) {
        let iter = iterable[Symbol.iterator]();
        return  {

        }
    }

