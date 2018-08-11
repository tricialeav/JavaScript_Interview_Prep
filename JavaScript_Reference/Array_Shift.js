/* Use array.shift() to remove an element from an array at the zero index
and return it */

let array = [34, 67, 12, 6, 98, 3]; 

const arrayShift = (arr) => {
    let removed = arr.shift(); 
    console.log(removed); 
}   

arrayShift(array); 