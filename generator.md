# Generators

My review notes from 2ality blog about es6 [generators](http://www.2ality.com/2015/03/es6-generators.html).

##### What are generators ?

generators are functions that can be paused and resumed. 

Example of generator: 

```js 

    function* getFunc() {
        console.log(1);  // A
        yield
        console.log(2);  // B
    }
```

A generator starts with a keyword `function*` and it is paused in the middle via `yield`

Calling the _getFunc_ does not excute the generator. Rather, it returns a **generator object** that lets 
you control _getFunc_'s execution: 

```js 
    > let genObj = getFunc();
```

`getFunc()` is initially suspended at the beginning of the body. The method `genObj.next()` continues the execution getFunc, until next yield: 

```js 
    > let genObj.next();
    > 1
    { value: undefined, done: false }
```

`genFunc` is now paused at **point A** It returns an object, then called again, it would result in:


```js 
    > let genObj.next();
    > 2
    { value: undefined, done: done }
```

Now, the generator is finished, further calleds on `genObj.next()` will have no effect.


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
##### Ways of Iterating through generators

example generator: 
```js 
    function* genFunc() {
         yield 'a';
         yield 'b';
     }
```

1. _for-of loop_ 
```js
    for(let x of getFunc() ){
        console.log(x);
    } 
    // Output: 
    // a 
    // b
```
2. spread operator (...)
```js 
    let arr = [...getFunc()]; // ['a', 'b']
```
3. destructuring 
```js  
    let [x,y] = getFunc();
    > x 
    'a'
    > y 
    'b'
```

##### Return from generators

```js

    function * genFuncWithReturn() {
        yield 'a'; 
        yield 'b';
        return 'result';
    }
```

The **return object** shows up as the last object returned by the _next()_. Whose property of done is _true_. 

```js 

    let genWithReturn = getFuncWithReturn(); 
    
    > genWithReturn.next();
      { value: 'a', done: false }

    > genWithReturn.next();
      { value: 'b', done: false }

    > genWithReturn.next();
      { value: 'result', done: true }
```
**note:** most constructs that work with iterables ignore the value inside the done object. example, _for-of_ loop.

**yield * **, for making recursive generator calls consider values inside the done object.

##### Yield * 

_yield *_ allows you to call another generator functions from within generators (as if it was a function call).

```js 

    function* foo() {
        yield 'a';
        yield 'b';
    }
```

**Normal function call:**

Calling foo returns an object, but doesn't execute _foo()_. So, in this case, we would need the _yield*_ recursive 
generator calls.

```js 
    function * bar() {
        yield 'x'
        foo(); // does nothing 
        yield 'y'
    }
```

** yield * recursive call: ** 

```js  
    function * bar() {
        yield 'x';
        yield * foo(); 
        yield 'y';
    }

    // Collect all values yielded by bar() in an array
    let arr = [...bar()];

    > arr
    //  [ 'x', 'a', 'b', 'y']
```

** Internals of yield *: ** 

behind the scenes, it uses a for-of loop to yield the _generators_ values. 

```js      
    function * bar() {
        yield 'x';
        yield * foo(); 
        for(let value of foo() ) {
            yield value;
        }
        yield 'y';
    }
```

**Additioanlly, yield * works on any iterable object: ** 

```js 
    function * blah() {
        yield 'out';
        yield * ['of', 'sequence'];
        yield 'here';
    }

    let arr = [...blah()];
    > arr

    // ['out', 'of', 'sequence', 'here']
     
```

** yield * consider end-of iteration values: ** 

Generators provide the value via return. The result of _yield *_ is the end-of-iteration value: 

```js 

    function * getFuncWithReturn() {
        yield 'a'; 
        yield 'b'; 
        return 'result';
    }

    function * logReturned(getObj) {
        let result = yield * getObj;
        console.log(result); // (A)        
    }

```

If we want to get to line (A), we first must iterate over all values yielded by logReturned():

```js 
    > [...logReturned(genFuncWithReturn())]
     The result
     [ 'a', 'b' ]
```
