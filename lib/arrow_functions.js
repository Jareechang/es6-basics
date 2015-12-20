"use strict";

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*
    Number module 
    
    simple module with following methods: 
        - getEvens
        - getOdds     
*/

var NumberModule = {
    _evens: [],
    _odds: [],
    evenNumber: function evenNumber(v) {
        return v % 2 === 0;
    },
    getEvens: function getEvens() {
        var _this = this;

        arr.forEach(function (v) {
            if (_this.evenNumber(v)) _this._evens.push(v);
        });
        return this._evens;
    },
    getOdds: function getOdds() {
        var _this2 = this;

        arr.forEach(function (v) {
            if (!_this2.evenNumber(v)) _this2._odds.push(v);
        });
        return this._odds;
    }
};

var evens = NumberModule.getEvens();
var odds = NumberModule.getOdds();

console.log(odds); // Log the even numbers