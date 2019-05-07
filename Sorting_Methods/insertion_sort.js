const arr = [3, 2, 6, 3, 8, 5, 6, 5, 4, 10]; 

const insertSort = (arr) => {
    let sorted = []; 
    sorted.push(arr[0]); 
    for (let i = 1; i < arr.length; i ++) {
        let current = arr[i]; 
        for (let j = 0; j < i; j++) {
            let compare = sorted[j]; 
                if (current < compare || current === compare) {
                    sorted.splice(j, 0, current);
                    break;
                }
                else if (j === sorted.length - 1) {
                    sorted.push(current)
                }        
        }
    }
    console.log(sorted);
}

insertSort(arr);