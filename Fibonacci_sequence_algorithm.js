/* Given a number, return the index value of the Fibonacci sequence, where
each position is the sum of the two previous positions. For example: 
1, 1, 2, 3, 5, 8, 13 */

fibonacciIterative = (num) => {
    if (num < 2) {
        return 1; 
    } else {
        let previous = 0; 
        let current = 1; 
        let sum;  
        for (let i = 0; i < num; i++) {
            sum = previous + current; 
            previous = current;
            current = sum;  
            console.log(current); 
        }
    }
}

fibonacciIterative(28);