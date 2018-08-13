/* When using objects in JavaScript, there are two methods to access 
the object's properties: bracket notation and dot notation. 
In dot notation, you access an object's properties by typing in the name
of the object, followed by a dot and the object property. 
In contrast, brackets can be used if a property name has special characters
(including spaces), or if the property/key is stored in another variable. 

https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781

*/

const dot = {
    key1: "This is the first property", 
    key2: "This is the second property"
}

const accessDot = dot.key2; 
console.log(accessDot); // "This is the second property"

const bracket = {
    "key 1": "This is the first property", 
    "key 2": "This is the second property"
}

const accessBracket = bracket["key 1"]; 
console.log(accessBracket); // "This is the first property"

const bracket2 = {
    key1: "This is the first property", 
    key2: "This is the second property"
}

const key2 = "key1"; 
console.log(bracket2[key2]); // "This is the first property"
console.log(bracket2["key2"]); // "This is the second property" 
