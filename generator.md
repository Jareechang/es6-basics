# Generators

My review notes from 2ality blog about es6 [generators](http://www.2ality.com/2015/03/es6-generators.html).

##### What are generators ?

generators are functions that can be paused and resumed. 

Two important applications of generators are:

• Implementing iterables 
• Blocking Asynchronous function calls

##### Implementing iterables via generators 


```js 
    // Asterisk indicates the function is a generator
    function * objectEntries(obj) {
        let propKeys = Reflect.ownKeys(obj);

        for (let propKey of propKeys) {
            /*
                Yield returns a value then pauses the generator.
                When called again, execution continues where it 
                was previously paused
            */
            yield [propKey, obj[propKey]];
        }

    }

```
