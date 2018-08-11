/* Ternary Operators are like a more concise form of a single if/else statement 

Code from:
https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md
*/

const compare = () => {
    let a = 100; 
    let b = (a > 50) ? "Greater than" : "Less than";
    return b;
}

compare(); 
