// https://www.sitepoint.com/5-typical-javascript-interview-exercises/

// Define a function that will accept a string as an argument and print out the string n times. Example, string = "string" and n = 4 shoul print "stringstringstringstring"

const repeater = (n, string) => {
    let print = ""; 
    for (let i = 0; i < n; i ++) {
        print += string;
    }
    return print;
}

console.log(repeater(5, "words"));