/* 

You are managing an auction with 650 bidders, each bidder is given a bidding card with their number printed on it. However, the numbers 0,1,6,8,9 all look like valid numbers upside-down or right-side up.

For example, 6 looks like 9 flipped upside-down. And "61" when held upside down looks like "19". However, some numbers may look the same. "69" when held upside down will look the exact same.

Write an algorithm to determine for given a number if it’s possible that the card is displayed upside-down.

The cards do not have leading 0s, so they are not printed “01” for “1” or “071” for “71”  

------------------------------------------------------------------------------------------

Pseudo code (because there are many assumptions we can make on this question, you may solve it based on different logic that what has been used below).

We will need to take a number into our function, and will need to make sure it falls into the 1 - 650 range

The leading zero in JavaScript is a bit of a trick question. JavaScript will automatically convert the integer to a number without a leading zero, so number.toString() will not contain the leading zero. Therefore, we cannot test for this particular edge case unless the numbers are being entered as strings.

Because of the above issue with leading zeros, we will assume that the input will always be in string form.

We will also assume that the number strings will resemble integers (no floats, etc).

We will need to both flip the digits in valid numbers (go from right-side-up to upside-down) as well as reorder those that have more than 1 digit. For example, 601 would flip to 901 (1 stays the same regardless of orientation) and then reorder to 109. 

We will also assume that, if a number looks the same right-side up as it does upside down, that the formula will return false as the "bidder" would still be using the same number regardless of the orientation. 
*/

const analyzeNumber = (number) => {
    let numberFlipped = false

    // We can immediately remove numbers that we know won't result in a valid number if flipped upside down
    const removeEdgeCases = (number) => {
        // Make sure the number is not greater than 650
        let intNumber = parseInt(number)
        if (intNumber > 650) {
            return (`${false} ${number}`)
        }
        // Make sure the number does not start with a zero
        else if (number[0] === "0") {
            return (`${false} ${number}`)
        }
        // Make sure the number does not include any numbers that cannot be flipped. This will only need to run one time (running it on the number after flipping it would be redundant)
        else if (numberFlipped === false) {
            if (number.includes("2") || number.includes("3") || number.includes("4") || number.includes("5") || number.includes("7")) {
                return (`${false} ${number}`)
                // If none of the above conditions are true, then flip the number and re-run it through remove edge cases 1 and 2
            } else {
                return flipNumber(number)
            }
        } else {
            return (`${true} ${number}`)
        }
    }

    const flipNumber = (number) => {
        // The only two numbers that we assume would look different are 6 and 9. 0, 1 and 8 we can assume to look the same regardless of the orientation
        let numberArray = number.split("")
        for (let i = 0; i < numberArray.length; i++) {
            switch (numberArray[i]) {
                case "6":
                    numberArray[i] = "9"
                    break
                case "9":
                    numberArray[i] = "6"
                    break
            }
        }
        // Once the numbers have been flipped over, we need to rearrange them (first number will be last and last will be first). This will always hold true as the max length of the number can only be three digits. If there is a middle number (three digit number), it would always stay in the same index location.
        const reorder = (numberArray) => {
            let length = numberArray.length
            switch (true) {
                case (length < 3):
                    let temp = numberArray[0]
                    numberArray[0] = numberArray[1]
                    numberArray[1] = temp
                    break
                case (length === 3):
                    let temp2 = numberArray[0]
                    numberArray[0] = numberArray[2]
                    numberArray[2] = temp2
                    break
            }
        }
        // Only run the reorder if the number length is greater than 1 digit
        if (numberArray.length > 1) {
            reorder(numberArray)
        }
        flippedNumber = numberArray.join("")
        numberFlipped = true
        // If the number is the same right side up and upside down, return false
        if (number === flippedNumber) {
            return (`${false} ${flippedNumber}`)
        }
        return removeEdgeCases(flippedNumber)
    }
    return removeEdgeCases(number)
}

console.log(analyzeNumber("61")) // false 69
