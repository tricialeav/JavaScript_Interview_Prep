// Write a function to remove duplicated from an array of N length

const removeDuplicates = (array) => {
    // Create a blank object (dictionary) to store the array items and their counts in
    let objects = {}
    // Create a blank array to output unique keys
    let noDuplicates = []

    const dictionary = (array) => {
        // For each item in the array, set the key as the item and set the value to a count of 1 or more
        for (let i = 0; i < array.length; i++) {
            objects[array[i]] = (objects[array[i]] || 0) + 1;
        }
        console.log(objects)
        
        // For each key in the object, push the key into the output array
        for (key in objects) {
            noDuplicates.push(key)
        }
        return(noDuplicates)
    }
    return dictionary(array)
}

const array = [1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7, 3, 4, 5, 6, 7, 4, 5, 6, 7, 5, 6, 7, 6, 7, 7];

console.log(removeDuplicates(array)); // ["1", "2", "3", "4", "5", "6", "7"]
// Depending on the original contents of the array, we may need to use parseInt(), etc. to revert the string type returned from pushing the object keys