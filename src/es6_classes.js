// Basic Parent class
class Parent {
    constructor(name, age) {
        this.name = name; 
        this.age = age;
    } 

    introduceSelf() {
        return `Hi, my name is ${this.name}. and I am ${this.age} years old.`;
    }        
}

var parent = new Parent("Bill", 30);
console.log(parent.introduceSelf());

//Basic Child extending from Parent class
class Child extends Parent {
    // Constructors
    constructor(name, age) {
        super(name, age);
    }

    // Class methods - Properties of the Class iteself
    static whine() {
        return `I want more toys`; 
    }    

    // prototype methods
    eatCandy () {
        return `I am ${this.age} and I love yum candy!`;
    }
}

var child = new Child("Mary", 11);

console.log(child.eatCandy());
console.log(Child.whine());