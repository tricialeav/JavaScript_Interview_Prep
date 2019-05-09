/* In prototypal inheritance, an object is a copy of the parent object. 
Instances may be made from many source objects
Typically use Object.create()
3 types of prototypal inheritance: 
Delegation
Concatenative
Functional 

Code from:
https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9 
*/ 

const person = {
   isHuman: true, 
   printGreeting: function () {
       console.log(`My name is ${this.firstName} ${this.lastName}.`);
   }
}

const janeDoe = Object.create(person); 

janeDoe.firstName = "Jane"; 
janeDoe.lastName = "Doe"; 

janeDoe.printGreeting(); 

