/*

Write an algorithm in a language of your choice that will flip a coin N times, and log the results. 
Bonus points for including the most frequently returned side after the coin has been flipped N times. 

*/

// Create a function that takes in a value
const coinToss = (N) => {
    // Create a dictionary to store the flipped results
    let results = { "heads": 0, "tails": 0 };
    // Set up a loop that will run N times
    for (let i = 0; i < N; i++) {
        // Using Math.round() and Math.random(), we will return either a 0 or 1
        let flip = Math.round(Math.random());
        // 0 or 1 = true / false in JS
        console.log(`Flip: ${i} and it's...${flip ? 'heads' : 'tails'}`);
        // Increase the results counter by adding 1 to either heads or tails
        if (flip) {
            results.heads += 1;
        } else {
            results.tails += 1;
        }
    }
    // Console the results after N flips
    if (results.heads === results.tails) {
        console.log(`It's a tie!`)
    } else {
        console.log(`${results.heads > results.tails ? 'Heads Wins ' + results.heads : 'Tails Wins ' + results.tails}`)
    }
}

coinToss(10)