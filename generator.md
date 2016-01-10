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
