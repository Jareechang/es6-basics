"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Basic Parent class

var Parent = (function () {
    function Parent(name, age) {
        _classCallCheck(this, Parent);

        this.name = name;
        this.age = age;
    }

    _createClass(Parent, [{
        key: "introduceSelf",
        value: function introduceSelf() {
            return "Hi, my name is " + this.name + ". and I am " + this.age + " years old.";
        }
    }]);

    return Parent;
})();

var parent = new Parent("Bill", 30);
console.log(parent.introduceSelf());

//Basic Child extending from Parent class

var Child = (function (_Parent) {
    _inherits(Child, _Parent);

    // Constructors

    function Child(name, age) {
        _classCallCheck(this, Child);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Child).call(this, name, age));
    }

    // Class methods - Properties of the Class iteself

    _createClass(Child, [{
        key: "eatCandy",

        // prototype methods
        value: function eatCandy() {
            return "I am " + this.age + " and I love yum candy!";
        }
    }], [{
        key: "whine",
        value: function whine() {
            return "I want more toys";
        }
    }]);

    return Child;
})(Parent);

var child = new Child("Mary", 11);

console.log(child.eatCandy());
console.log(Child.whine());