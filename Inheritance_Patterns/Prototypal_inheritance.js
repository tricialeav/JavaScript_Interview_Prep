/* Objects inherit properties from other objects
Instances may be made from many source objects
Typically use Object.create()
3 types of prototypal inheritance: 
Delegation
Concatenative
Functional 
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

