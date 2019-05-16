// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

const GoT = [
    {
        id: 0, 
        name: 'Daenerys Targaryen', 
        sigil: 'Three Headed Dragon', 
        likability: 8
    }, 
    {
        id: 1, 
        name: 'John Snow', 
        sigil: 'Dire Wolf', 
        likability: 8
    }, 
    {
        id: 2, 
        name: 'Tyrion Lannister', 
        sigil: 'Lion', 
        likability: 9
    }, 
    {
        id: 3, 
        name: 'Margaery Tyrell', 
        sigil: 'Rose', 
        likability: 6
    }, 
    {
        id: 4, 
        name: 'Sansa Stark', 
        sigil: 'Dire Wolf', 
        likability: 5
    }, 
    {
        id: 5, 
        name: 'Cersi Lannister', 
        sigil: 'Lion', 
        likability: 1
    }, 
    {
        id: 6, 
        name: 'Viserys Targaryen', 
        sigil: 'Three Headed Dragon', 
        likability: 0
    }, 
    {
        id: 7, 
        name: 'Olenna Tyrell', 
        sigil: 'Rose', 
        likability: 8
    }

]; 

// Map is used to repeat the same operation on each of the elements in an array. 
// Map can accept three values in the callback: current item, current index of an item, or an entire array.
// Map is preferable to a for loop in that no state management or counter is required, and it automatically produces a new array of values.

let GoTNames = GoT.map(character => character.name);

console.log(GoTNames); //["Daenerys Targaryen", "John Snow", "Tyrion Lannister", "Margaery Tyrell", "Sansa Stark", "Cersi Lannister", "Viserys Targaryen", "Olenna Tyrell"]

// Filter is used to only return a portion of an array that meets specific criteria.
// Filter accepts the same parameters as .map

let GoTLikability = GoT.filter(character => character.likability > 5);

console.log(GoTLikability); 
/* 
0:Object {id: 0, name: "Daenerys Targaryen", sigil: "Three Headed Dragon", …}
1:Object {id: 1, name: "John Snow", sigil: "Dire Wolf", …}
2:Object {id: 2, name: "Tyrion Lannister", sigil: "Lion", …}
3:Object {id: 3, name: "Margaery Tyrell", sigil: "Rose", …}
4:Object {id: 7, name: "Olenna Tyrell", sigil: "Rose", …} 
*/

// Reduce is used to iterate over items and return a total value 
// Reduce takes four parameters: end value, current item, index, and array.
// Reduce also requires a starting value, placed at the end of the return statement's closing } tag
let GoTTotalLikability = GoT.reduce((likability, character) => likability += character.likability, 0); 

console.log(GoTTotalLikability); // 45
