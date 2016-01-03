# Generators

My review notes from 2ality blog about es6 [generators](http://www.2ality.com/2015/03/es6-generators.html).

##### What are generators ?

generators are functions that can be paused and resumed. 

Two important applications of generators are:

• Implementing iterables 
• Blocking Asynchronous function calls
    - The execution would wait until results is ready, meaning that the code would look synchronous while performing asynchronous operations

##### Ways of creating generators

four ways of creating generators: 

1. through a generator function declaration: 

```js 
    function* getFunc(){ … }
    let genObj = getFunc();
```

2. through a generator function expression 

```js 
    const getFunc = function(){ … };
    let genObj = getFunc();
```

3. through a generator method in an object literal  

```js 
    let obj = {
        * generatorMethod() {
            ...
        }
    }    
    let genObj = obj.generatorMethod();
```

4. through a generator method in a class definition (class declaration or expression)

```js 
    class myClass {
        * generatorMethod() {
            ...
        }
    }    
    let myInst = new myClass();
    let genObj = myInst.generatorMethod();
```