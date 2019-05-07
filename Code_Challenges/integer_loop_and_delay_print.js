// Write a function that will loop through a list of integers and print the index of each element after a 1 second delay.
//https://medium.freecodecamp.org/3-questions-to-watch-out-for-in-a-javascript-interview-725012834ccb

const intake = (array) => {
    counter = 0
    for (let i = 0; i < array.length; i++) {
        setTimeout(function () {
            console.log(`Printing position ${i}, number ${array[i]}`)
        }, 1000 + counter)
        counter += 1000
    }

}

intake([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);