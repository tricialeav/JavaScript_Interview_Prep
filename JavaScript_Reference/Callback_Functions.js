/* In JavaScript, callback functions are functions to be executed 
after another function has finished. 
The callback is passed as an argument to the inital function. */

const addTen = (num, cb) => {
    let plusTen = num + 10; 
    cb(plusTen);  // cb(15)   
}

const multiplyTwo = (num) => {
    let timesTwo = num * 2; 
    console.log(timesTwo); // 30
}

addTen(5, multiplyTwo); 