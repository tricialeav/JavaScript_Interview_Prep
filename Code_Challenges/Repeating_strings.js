/*

Given the following list of strings, print out each unique string, followed by a colon and the number of times it appears in the array: 

var repeatingStrings = [“ocean”, “sand”, “ocean”, “waves”, “water”, “waves”, “water”, “sand”, “sand”, “water”, “sand”]; 

An example of the output to return: 

ocean: 2 
sand: 4
waves: 2
water: 3

Source: 
https://practice.geeksforgeeks.org/problems/twice-counter/0

*/


const repeatedStrings = ['ocean', 'sand', 'ocean', 'waves', 'sand', 'water', 'waves', 'water', 'sand', 'water', 'sand'];
const countStrings = (array) => {
    let results = {}
    for (let i = 0; i < repeatedStrings.length; i++) {
        if (results[repeatedStrings[i]] === undefined) {
            results[repeatedStrings[i]] = 1;
        } else {
            results[repeatedStrings[i]] += 1;
        }
    }
    // remember "results" is a JS Object NOT an array so it is not indexed, so we must use a for/in loop to iterate
    for (string in results) {
        console.log(`${string}: ${results[string]}`)
    }
}

countStrings(repeatedStrings)