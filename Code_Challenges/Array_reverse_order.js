/* Reverse the order of an array without using the array.reverse() method */ 

const oddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
const evenArray = [1, 2, 3, 4, 5, 6, 7, 8];

/*  My answer to this problem was to work from the outside of the array to the middle, 
so the first item would be swapped with the last item, second with the second to last, etc. 
until it reached the middle */

// Set up a function that takes in an array
const reverseOrder = (arr) => {
    // Set a counter to the last item's index in the array (this will be decreased as the loop increases)
    let counter = arr.length - 1; 
    // Iterate over the first half of the array
    for (let i = 0; i < Math.floor(arr.length / 2); i++) { 
        // A temporary variable is set to the left array value
        let temp = arr[i]; 
        // The left array value is updated to the right value
        arr[i] = arr[counter]; 
        // The right value is set to the temporary (left) value
        arr[counter] = temp
        // Decrease the counter for the second half of the array
        counter--; 
    } console.log(arr);
}

reverseOrder(oddArray); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
reverseOrder(evenArray); // [8, 7, 6, 5, 4, 3, 2, 1]