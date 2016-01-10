'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
function iterateOver() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var index = 0;
    var iterable = _defineProperty({}, Symbol.iterator, function () {
        var iterator = {
            next: function next() {
                // Logic check
                if (index < args.length) {
                    return { value: args[index++] };
                } else {
                    return { done: true };
                }
            }
        };
        return iterator;
    });
    return iterable;
}

// for (let x of iterateOver('fee', 'fi', 'fo', 'fum')) {
//        console.log(x);
// }

/* Iterators are also iterable  
 Simplifying the function above 
     IterateOver() fuction with args
–––––––––––––––––––––––––––*/

function simplifiedIterateOver() {
    var _iterable2;

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
    }

    var index = 0;
    var iterable = (_iterable2 = {}, _defineProperty(_iterable2, Symbol.iterator, function () {
        /* This in this case is referred 
            to the iterable object 
                                
            ** called with a context object owning the call (implicit binding)
        */
        return this;
    }), _defineProperty(_iterable2, 'next', function next() {
        if (index < args.length) {
            return { value: args[index++] };
        } else {
            return { done: true };
        }
    }), _iterable2);
    return iterable;
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = simplifiedIterateOver('fee', 'fi', 'fo', 'fum')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var x = _step.value;

        console.log(x);
    }

    /* Cominbator for iterables 
    –––––––––––––––––––––––––––*/
    // cominbator are functions that combine existing iterables to create new ones.

    /* 
        Let’s start with the combinator function take(n, iterable), which returns an iterable
     over the first n items of iterable.*/

    // Iterable interface
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

function take(n, iterable) {
    var _ref;

    /* convert the iterable object into an iterator */
    var iter = iterable[Symbol.iterator]();
    return _ref = {}, _defineProperty(_ref, Symbol.iterator, function () {
        return this;
    }), _defineProperty(_ref, 'next', function next() {
        /* Implement the logic to keep track if the number to be taken
            has been reached */
        if (n > 0) {
            n--;
            // Return the value of the next within the iterator if limit hasn't been reached
            return iter.next();
        } else {
            return { done: true };
        }
    }), _ref;
}

var arr = ["a", "b", "c", "d"];

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = take(3, arr)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var x = _step2.value;

        console.log(x);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}