"use strict";

var _obj;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var handler = "test";

var somethingElse = {
    sayYelp: function sayYelp() {
        return "Yelp!";
    }
};

var parentObj = {
    sayHello: function sayHello() {
        return 'Hi There!';
    },
    toString: function toString() {
        return " meowsky";
    }
};

var obj = _obj = _defineProperty({
    // __proto__
    __proto__: parentObj,
    // Does not set internal prototype
    // '__proto__': somethingElse,
    // Shorthand for ‘handler: handler’
    handler: handler,
    // Methods
    toString: function toString() {
        // Super calls
        return "d " + _get(Object.getPrototypeOf(_obj), "toString", this).call(this);
    }
}, "prop_" + (function () {
    return 42;
})(), 42);

console.log(obj.sayHello());
console.log(obj.handler);
console.log(obj.toString());
console.log(obj.prop_42);
// console.log(obj.sayYelp());