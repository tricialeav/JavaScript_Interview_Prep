/* Use array.slice() to select and remove part of an array. This will
return a new array. */

const array = [1, 2, 3, 4, 5, 6];
const newArray = array.slice(0, 3); 
console.log(array); // [1, 2, 3, 4, 5, 6]
console.log(newArray); // [1, 2, 3]