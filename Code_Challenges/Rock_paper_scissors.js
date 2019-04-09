/*

Let’s play a game. Write out a simple version of “Rock, Paper, Scissors” in the language of your choice. The game should allow for two “players”, it should print out the results of each round, and the game will be completed when a player has won a minimum of four rounds. The rules are as follows: 

Rock beats Scissors
Scissors beats Paper
Paper beats Rock

Source: 
https://practice.geeksforgeeks.org/problems/rock-paper-scissors/0

*/

// Pseudo-code:

// We need to have two players
// Each player can get one of three options
// We will need to account for players ending up in a tie
// We will assume the following: 
// 0 corresponds to Rock
// 1 corresponds to Paper
// 2 corresponds to Scissors
// We will convert these numbers back to rock, paper, scissors (strings) before outputting them to the page

const playGame = () => {
    // Set the inital player wins to zero and create a round counter
    let p1Wins = 0
    let p2Wins = 0
    let counter = 0
    // We will run a do/while loop until one of the two players has gotten at least 4 wins. This will automatically account for the tie edge case.
    do {
        // the loop starts with retrieving the random rolls for each player
        let player1Roll = Math.floor(Math.random() * Math.floor(3))
        let player2Roll = Math.floor(Math.random() * Math.floor(3))
        // We create a method to convert the random number rolls back into strings for use in the console.log()
        const convertToString = (playerRoll) => {
            switch (playerRoll) {
                case 0:
                    return "Rock"
                case 1:
                    return "Paper"
                case 2:
                    return "Scissors"
            }
        }
        // We set up a switch statement that covers the three possible scenarios: tie, player 1 wins, and player 2 wins
        // In the cases, we are still comparing the random numbers (not the string values of Rock, Paper, Scissors). Once the numbers have been compared, we are calling the convertToString function to pass in the human-readable strings.
        switch (true) {
            // Tie
            case player1Roll === player2Roll:
                console.log(`
                    --- Round ${counter} --- 
                    Player 1: ${convertToString(player1Roll)} 
                    Player 2: ${convertToString(player2Roll)} 
                    There was a tie 
                    ---------------`)
                break
            // Player 1 wins
            case player1Roll === 0 && player2Roll === 2 || player1Roll === 1 && player2Roll === 0 || player1Roll === 2 && player2Roll === 1:
                console.log(`
                    --- Round ${counter} --- 
                    Player 1: ${convertToString(player1Roll)} 
                    Player 2: ${convertToString(player2Roll)} 
                    Player 1 Wins 
                    ---------------`)
                p1Wins++
                break
            // Player 2 wins
            case player2Roll === 0 && player1Roll === 2 || player2Roll === 1 && player1Roll === 0 || player2Roll === 2 && player1Roll === 1:
                console.log(`
                    --- Round ${counter} --- 
                    Player 1: ${convertToString(player1Roll)} 
                    Player 2: ${convertToString(player2Roll)} 
                    Player 2 Wins 
                    ---------------`)
                p2Wins++
                break
        }
        counter++
    } while (p1Wins < 4 && p2Wins < 4)
    if (p1Wins > p2Wins) {
        console.log(`Player 1 wins the game!`)
    } else {
        console.log(`Player 2 wins the game!`)
    }
}

playGame(); 