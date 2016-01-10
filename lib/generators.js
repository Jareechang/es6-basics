"use strict";

require("babel-polyfill");

var _marked = [take].map(regeneratorRuntime.mark); // Example of Generators

/* 
*   1.  Take() function, converts sequence of iterated values into a 
*       sequence of length n:
*/

function take(n, iterable) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, x;

    return regeneratorRuntime.wrap(function take$(_context) {
        while (1) switch (_context.prev = _context.next) {
            case 0:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 3;
                _iterator = iterable[Symbol.iterator]();

            case 5:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context.next = 15;
                    break;
                }

                x = _step.value;

                if (!(n <= 0)) {
                    _context.next = 9;
                    break;
                }

                return _context.abrupt("return");

            case 9:
                n--;
                _context.next = 12;
                return x;

            case 12:
                _iteratorNormalCompletion = true;
                _context.next = 5;
                break;

            case 15:
                _context.next = 21;
                break;

            case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](3);
                _didIteratorError = true;
                _iteratorError = _context.t0;

            case 21:
                _context.prev = 21;
                _context.prev = 22;

                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }

            case 24:
                _context.prev = 24;

                if (!_didIteratorError) {
                    _context.next = 27;
                    break;
                }

                throw _iteratorError;

            case 27:
                return _context.finish(24);

            case 28:
                return _context.finish(21);

            case 29:
            case "end":
                return _context.stop();
        }
    }, _marked[0], this, [[3, 17, 21, 29], [22,, 24, 28]]);
}

var arr = ["bill", "bob", "dilly", "silly", "milly", "gilly"];

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = take(2, arr)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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