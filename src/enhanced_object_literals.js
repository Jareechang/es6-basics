let handler = "test";

var somethingElse = {
    sayYelp() {
        return "Yelp!";
    }
}

var parentObj = {
    sayHello(){
        return 'Hi There!';
    },
    toString() {
        return " meowsky";
    }
}

var obj = {
    // __proto__
    // __proto__: parentObj,
    // Does not set internal prototype
    '__proto__': somethingElse,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ "prop_" + (() => 42)() ]: 42
};


