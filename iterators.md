# Iterators

A great source for learning about [iterators](http://www.2ality.com/2015/02/es6-iteration.html).
These are key Points that I summarized for **myself** from the blog. 

#### Iterability 


Some definitions: 

**Data Consumers** - Language constructs that consume data

1. `for-of` loops over values 
2. `(...)` spread operators inserts values into arrays 

**Date Source** - The data consumers can get their values from variety of data source.

1. Iterating over elements of an array
2. The key-value entries in a map 
3. Or characters of a string 

**Source** - A value is considered iterable if it has a method whos key `Symbol.iterator` that return 
a so called _iterator_. The **Iterator** is an object that returns values via its method `next()`

**Consumption** - Data consumers use the iterators to retreive the values they are consuming 

what consumption looks like for an array `arr`.

First, create an iterator via the method whos key is **Symbol.iterator**. 

```js
 > let arr = ['a', 'b', 'c'];
 > let iter = arr[Symbol.iterator]();
```

```js 
> iter.next()
{ value: 'a', done: false }
> iter.next()
{ value: 'b', done: false }
> iter.next()
{ value: 'c', done: false }
> iter.next()
{ value: undefined, done: true }
```

#### Iterators are Iterable





