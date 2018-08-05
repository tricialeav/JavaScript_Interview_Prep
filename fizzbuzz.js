/* Write a program that prints out N numbers, replacing multiples of 3 
with "fizz", multiples of 5 with "buzz", and multiples of 3 and 5 with 
"fizzbuzz" */

fizzbuzz = (num) => {
    if (num <= 0) {
        return false; 
    } else {
        for (let i = 1; i <= num; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("fizzbuzz"); 
            } else if (i % 3 === 0) {
                console.log("fizz");
            } else if (i % 5 === 0) {
                console.log("buzz"); 
            } else {
                console.log(i);
            }
        }
    }
} 

fizzbuzz(59);