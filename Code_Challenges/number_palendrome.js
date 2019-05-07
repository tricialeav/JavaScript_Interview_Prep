let x = 123453421; 
let y = 123454321;
let z = 12344321; 

 var isPalindrome = function(x) {
    // Edge case: if the number has an odd number of digits, ignore the middle number (pivot). If it is even, compare all. 
    let array = x.toString().split('');
    for (let i = 0; i < Math.floor(array.length / 2); i ++) {
        if (array[i] != array[array.length - 1 - i]) {
            return false; 
        }
        else {
            continue; 
        }
    }
    return true;
};

console.log(isPalindrome(x));
console.log(isPalindrome(y));
console.log(isPalindrome(z));