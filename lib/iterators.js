'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

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

var obj = { first: 'Jane', second: 'Doe' };

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = objectEntries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2);

        var key = _step$value[0];
        var value = _step$value[1];

        console.log(key + ': ' + value);
    }
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