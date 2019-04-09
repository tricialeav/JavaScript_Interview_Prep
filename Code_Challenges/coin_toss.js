/** 
 * Wanna bet? Write an algorithm in a language of your 
 * choice that will flip a coin N times, and log the results. 
 * Bonus points for including the most frequently returned side 
 * after the coin has been flipped N times. 
 **/
const coinToss = (N) => {
    let results = { "heads": 0, "tails": 0 };
    for (let i = 0; i < N; i++) {
        // have to use Math.round because 0-1 not "0" or "1"
        let flip = Math.round(Math.random());
        // 0 or 1 = true / false in JS
        console.log(`Flip: ${i} and it's...${flip ? 'heads' : 'tails'}`);
        // in JS can also say flip === 0
        if (flip) {
            results.heads += 1;
        } else {
            results.tails += 1;
        }
    }
    if (results.heads === results.tails) {
        console.log(`It's a tie!`)
    } else {
        console.log(`${results.heads > results.tails ? 'Heads Wins ' + results.heads : 'Tails Wins ' + results.tails}`)
    }
}

coinToss(10)