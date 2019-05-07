// https://scotch.io/tutorials/understanding-scope-in-javascript

// Global Scope: variables set here can be accessed (and changed) from anywhere in the code and should be avoided

let character = 'Khal Drogo'; 
console.log(character) // Khal Drogo

const changeCharacter = () => {
    character = 'Bran Stark'
}
changeCharacter();
console.log(character) // Bran Stark

// Local Scope is only accessible from inside a function

const newCharacter = () => {
    let newCharacterName = 'Aria Stark'; 
    var anotherNewCharacterName = 'Sansa Stark'
    console.log(newCharacterName); 
    console.log(anotherNewCharacterName);
}

newCharacter() // Aria Stark Sansa Stark
console.log(anotherNewCharacterName) // undefined
console.log(newCharacterName) // undefined

// Block Scope may or may not be accessible outside of an if statement depending on how the variable is declared (only the var keyword works this way)

const anotherNewCharacter = (character) => {
    if (character === 'Tyrion Lannister') {
        let nextBestLannister = 'Jamie Lannister'; 
        const theWorstLannister = 'Cersi Lannister'
        var eldestLannister = 'Tywin Lannister'
    }
    console.log(nextBestLannister); // undefined
    console.log(theWorstLannister); // undefined
    console.log(eldestLannister); // Tywin Lannister
}

anotherNewCharacter('Tyrion Lannister');