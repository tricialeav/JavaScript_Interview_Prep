// Immediately invoked function expressions are usefu when we don't care about a return value but also want data privacy

(function () {
    let value = 10 * 20; 
    console.log(value);
}) ();

// 200

// ES6:

( () => {
    let someOtherValue = 40 * 10
    console.log(someOtherValue);
}) ()

// 400

{
    let newValue = 200 / 5; 
    console.log(newValue);
}

// 40