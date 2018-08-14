/* Reverse the order of an array without using the array.reverse() method */ 

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

const reverseOrder = (arr) => {
    let counter = arr.length - 1; 
    for (let i = 0; i < Math.floor(arr.length / 2); i++) { 
        let temp = arr[i]; 
        arr[i] = arr[counter]; 
        arr[counter] = temp
        counter--; 
    } console.log(arr);
}

reverseOrder(array); 