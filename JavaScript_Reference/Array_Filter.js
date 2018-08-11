/* array.filter() is used to filter items in an array that 
match a provided criteria and return a new array of those items */ 

let unfilteredArray = [5, 12, 6, 3, 78, 6, 23]; 

const greaterThanTen = (number) => {
    return number > 10; 
}

let filteredArray = unfilteredArray.filter(greaterThanTen); 

console.log(filteredArray); 