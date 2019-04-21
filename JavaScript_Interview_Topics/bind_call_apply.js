// https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb
// https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind

// Bind (binds this now but executes function later)

const name = {
    firstName: 'Jane', 
    lastName: 'Doe',
    getFullName: function() {
        let fullName = (this.firstName + ' ' + this.lastName);
        return fullName;
    }
}

const person = function(place, adjective) {
    console.log(`Hello ${this.getFullName()}. Welcome to ${place}! I hope it is ${adjective}!`);
}

let printMessage = person.bind(name);

printMessage('my repo', 'helpful');

// Call (binds this now and invokes function immediately)

person.call(name, 'my repo', 'helpful');

// Apply (binds this now and invokes function immediately)

person.apply(name, ['my repo', 'helpful'])