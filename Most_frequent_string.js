/* Given an array, find the most frequent string (assuming that there 
is not a tie) */ 

mostFrequent = (arr) => {
    let currentCount; 
    let max = 0; 
    let mostFrequentString; 
    for (let i = 0; i < arr.length; i++) { 
        currentCount = -1; 
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currentCount += 1; 
            }
        }
        if (currentCount > max) {
            max = currentCount;
            mostFrequentString = arr[i];
        }
    } return (mostFrequentString);
}

mostFrequent(["string1", "string2", "string3", "string3", "string3", "string2"]); // "string3"