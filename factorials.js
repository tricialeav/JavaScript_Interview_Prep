/* Return the factorial for a given number. 
A factorial is the product of an integer and all of the integers before it.
Example: 4! = 4 * 3 * 2 * 1 which equals 24 */

factorialIterative = (num) => {
    if (num <= 0) {
        return false; 
    } else { 
        let factorial = num;  
        for (let i = num; i > 1; i--) {
            factorial *= (i - 1); 
        }
        return(factorial);
    }
}

factorialIterative(4); // 24