# Iterators

A great source for learning about [iterators](http://www.2ality.com/2015/02/es6-iteration.html).
These are key Points that I summarized for **myself** from the blog. 

#### Iterability 


Some definitions: 

**Data consumers** - language constructs that consume data

1. `for-of` loops over values 
2. `(...)` spread operators inserts values into arrays 

**Source** - A value is considered iterable if it has a method whos key `Symbol.iterator` that return 
a so called _iterator_. The **Iterator** is an object that returns values via its method `next()`

**Consumption** - Data consumers use the iterators to retreive the values they are consuming 

#### Iterators are Iterable





