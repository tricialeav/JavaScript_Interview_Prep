/* A promise is an object that represents a single value some time in the future
based on JavaScript's asynchronous nature.
Promises are a returned object to which you attach callbacks, 
instead of passing callbacks into a function.
Promises are immutible (cannot be changed) and must return a value
Promises have three states: fulfilled, pending, and rejected
Promises must contain a .then() method to handle fulfilled promises
Add a .catch() method to the end to deal with rejected promises

Code from:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
https://codeburst.io/the-es6-promises-87a979ab27e4
*/

const isSmallerThanTen = (num) => {
    return new Promise((resolve, reject) => {
        num < 10 ? resolve(true) : reject(false)
    })
}

isSmallerThanTen(23)
    .then(res => console.log('The number is smaller than 10'))
    .catch(err => console.log('The number is not smaller than 10'))