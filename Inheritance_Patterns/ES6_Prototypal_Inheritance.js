
// Use the class keyword to create the constructor
class Vehicle {
    // We will pass arguments to the constructor function within the class
    constructor(year, make, model) {
        // Set the initial object properties that will be present on all of the constructor's children
        this._year = year;
        this._make = make;
        this._model = model;
    }

    // Define any methods that should be available to all of the constructor's children
    windowShop() {
        return `You are looking at a ${this._year} ${this._make} ${this._model}!`
    }
}

// Define a second class that inherits from the parent by using the ES6 'extends' keyword. This child will have access to all of the parent's methods and properties. 
class Car extends Vehicle {
    constructor(year, make, model, color, transmission) {
        // The super keyword is used to call the constructor of the super class
        super(year, make, model);
            this._color = color; 
            this._transmission = transmission; 
    }

    testDrive() {
        return `You're test driving a ${this._color} ${this._year} ${this._make} ${this._model} that has a(n) ${this._transmission} transmission!`
    }
}

// We will create a new instance of the Car class and pass in the applicable values. 
const Mazda = new Car (2019, 'Mazda', 'CX-5', 'Blue', 'Automatic');

console.log(Mazda);

console.log(Mazda.windowShop()); // You are looking at a 2019 Mazda CX-5!
console.log(Mazda.testDrive()); // You're test driving a Blue 2019 Mazda CX-5 that has a(n) Automatic transmission!

