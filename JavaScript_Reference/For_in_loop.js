/* Use a for...in loop to iterate through the properties of an object */

let object = {
    a: 1, 
    b: 2, 
    c: 3,
    d: 4 
}

const printValues = (obj) => {
    for (key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

printValues(object); 