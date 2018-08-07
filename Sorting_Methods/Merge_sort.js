/* Uses recursion to divide an array into left and right lists until each 
contains only one item
Merge individual items together into new results array

Average Time Complexity: Θ(n log(n))
Space Complexity (Worst): O(n) 

http://btholt.github.io/four-semesters-of-cs/
*/ 

const arr = [3, 2, 7, 55, 3, 4, 89, 34, 12, 6, 2, 90, 32, 1];

const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr; 
    } 

    const length = arr.length; 
    const middle = Math.floor(length/2); 
    const left = arr.slice(0, middle); 
    const right = arr.slice(middle); 

    return merge(mergeSort(left), mergeSort(right)); 
}; 

const merge = (left, right) => {
    const results = []; 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift()); 
        } else {
            results.push(right.shift()); 
        }
    }
    return results.concat(left, right); 
}

mergeSort(arr);

