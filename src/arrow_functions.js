var arr = [1,2,3,4,5,6,7,8,9];

/*
    Number module 
    
    simple module with following methods: 
        - getEvens
        - getOdds     
*/

var NumberModule = {
    _evens: [],
    _odds: [],
    evenNumber(v) {
        return v % 2 === 0;
    },
    getEvens() {        
        arr.forEach( v => {
            if (this.evenNumber(v))
                this._evens.push(v);
        });
        return this._evens;
    },
    getOdds() {
        arr.forEach ( v => {
            if (!this.evenNumber(v))
                this._odds.push(v);
        })
        return this._odds;
    }
}

let evens = NumberModule.getEvens();
let odds = NumberModule.getOdds();

console.log(odds); // Log the even numbers

