/* Take the last element in a list and use as a pivot
Items smaller than the pivot go to the left
Items larger than the pivot go to the right
Call quicksort on the resulting left and right arrays
Concat left, pivot and right

Average Time Complexity: Θ(n log(n)) 
Space Complexity (Worst): O(log(n))
Do not use Quicksort on already sorted lists 
http://btholt.github.io/four-semesters-of-cs/
*/

const numsArray = [3, 2, 7, 55, 3, 4, 89, 34, 12, 6, 2, 90, 32, 1];

const quickSort = (nums) => {
    if (nums.length <= 1) {
        return nums; 
    } 

    const pivot = nums[nums.length-1]; 
    const left = []; 
    const right = []; 

    for (let i = 0; i < nums.length - 1; i ++) {
        if (nums[i] < pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]); 
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

quickSort(numsArray); 