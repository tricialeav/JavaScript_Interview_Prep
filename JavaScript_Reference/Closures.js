/* Closures in JavaScript allow for data privacy and the avoidance of 
side-effects.
This is achieved by nesting functions inside of other functions which creates a scope chain. Variables within the closure 
cannot be changed in the global scope.
To create a closure, the interior function must return a value or have its value 
passed to another function. This is particulary useful when dealing with async
functions. 
Closures are an important part of functional programming. 

https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/README.md#you-dont-know-js-scope--closures
https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4

*/

const printName = () => {
    const name = 'Tricia'; 
    const print = () => {
        console.log(name); // Nothing returned in inner function
    }
    return print(); 
}

const printed = printName(); // 'Tricia'
console.log(printed); // undefined


const add10 = () => {
    const ten = 10; 
    const add20 = () => {
        const twenty = 20; 
        return (ten + twenty); // Value returned in inner function
    }
    return add20(); 
}

const added = add10(); 
console.log(added); // 30


