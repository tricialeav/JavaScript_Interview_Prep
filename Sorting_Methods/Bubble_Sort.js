/* Bubble sort is typically not suggested for use in production code 
Bubble sort uses nested loops to iterate through an array and compare each
index with the index next to it, and swap positions when necessary. 

Average Time Complexity: Θ(n log(n))
Space Complexity (Worst): O(log(n))

Code from:
http://btholt.github.io/four-semesters-of-cs/

*/ 

let array = [3, 213, 6, 9, 567, 64, 7, 34, 756, 8, 23, 56];

const bubbleSort = (arr) => {  
    let swapped;           
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]; 
                arr[i] = arr[i + 1]; 
                arr[i + 1] = temp; 
                console.log(arr);  
                swapped = true; 
            }
        }
    } while (swapped); 
}    

bubbleSort(array); 