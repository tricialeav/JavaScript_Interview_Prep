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

const mapReduceFilter = (GoT, sigil) => {
    let output = GoT
    // Only select selected sigil
    .filter(GoT => GoT.sigil === sigil)
    // Get an array of likability scores
    .map(GoT => GoT.likability)
    // Return the total likability score
    .reduce((acc, likability) => acc + likability, 0);
    console.log(output);
}

mapReduceFilter(GoT, 'Lion') // 10
mapReduceFilter(GoT, 'Dire Wolf') // 13
mapReduceFilter(GoT, 'Rose') // 14
mapReduceFilter(GoT, 'Three Headed Dragon') // 8