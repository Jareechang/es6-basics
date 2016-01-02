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
    
    /* Implementing iterables

        IterateOver() fuction with args
    –––––––––––––––––––––––––––*/
    function iterateOver(...args) {
        let index = 0;
        let iterable = {
            [Symbol.iterator](){
                let iterator = {
                    next(){
                        // Logic check 
                        if(index < args.length) {
                            return { value: args[index++] };
                        }else {
                            return { done: true };
                        }
                    }
                }
                return iterator;
            }
        };
        return iterable; 
    }

    // for (let x of iterateOver('fee', 'fi', 'fo', 'fum')) {
    //        console.log(x);
    // }

    /* Iterators are also iterable  

    Simplifying the function above 

        IterateOver() fuction with args
    –––––––––––––––––––––––––––*/

    function simplifiedIterateOver(...args) {
        let index = 0;
        let iterable = {
            [Symbol.iterator](){  
                /* This in this case is referred 
                    to the iterable object 
                                        
                    ** called with a context object owning the call (implicit binding)
                */                            
                return this;
            },
            next(){
                if (index < args.length) {
                    return { value: args[index++] };
                } else {
                    return { done: true };
                }
            }
        }
        return iterable;
    }

    for (let x of simplifiedIterateOver('fee', 'fi', 'fo', 'fum')) {
           console.log(x);
    }

       


    /* Cominbator for iterables 
    –––––––––––––––––––––––––––*/
    // cominbator are functions that combine existing iterables to create new ones.

    /* 
        Let’s start with the combinator function take(n, iterable), which returns an iterable
     over the first n items of iterable.*/ 

     // Iterable interface
    function take(n,iterable) {
        /* convert the iterable object into an iterator */
        let iter = iterable[Symbol.iterator]();
        return  {
            [Symbol.iterator](){
                return this
            },
            next(){
                /* Implement the logic to keep track if the number to be taken
                    has been reached */
                if(n > 0) {
                    n--;
                    // Return the value of the next within the iterator if limit hasn't been reached
                    return iter.next();
                }else {
                    return { done: true };
                }
            }                
        }
    }

    let arr = ["a", "b", "c", "d"];

    for(let x of take(3, arr)){
        console.log(x);
    }