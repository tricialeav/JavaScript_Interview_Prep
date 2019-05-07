// https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb
// https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind

// Bind (binds this now but executes function later)

class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    getFullName () {
        let fullName = (`${this._firstName} ${this._lastName}`);
        return fullName;
    }
}

const greeting = function (place, adjective) {
    return `Hello ${this.getFullName()}. Welcome to ${place}! I hope it is ${adjective}!`;
}

let janeDoe = new Person('Jane', 'Doe');
let printMessage = greeting.bind(janeDoe);

console.log(printMessage('my repo', 'helpful'));

// Call (binds this now and invokes function immediately)

console.log(greeting.call(janeDoe, 'my repo', 'useful'));

// Apply (binds this now and invokes function immediately)

console.log(greeting.apply(janeDoe, ['my repo', 'handy']));