// Prototypal Inheritance creates copies of the parent object or objects.
// Object.assign() is used to create these copies from one or more source objects.
// This allows the children to be more flexible as they can be changed, and can be made from more than one object constructor. 
// The main downside is the increase in memory space required to make copies of the original constructor object(s)


const make = function () {
    const attrs = {}; 

    return Object.assign(this, {
        set (make, model) {
            attrs[make] = make;
            attrs[model] = model; 
        },

        getMake (make) {
            return attrs[make];
        },

        getModel (model) {
            return attrs[model];
        }
    })
}

let Mazda = { make: 'Mazda'}; 
let CX3 = { model: 'CX-3' };

let mazdaCX3 = Object.assign({}, Mazda, CX3);

console.log(mazdaCX3); // {make: "Mazda", model: "CX-3"}
console.log(`You are driving a ${mazdaCX3.make} ${mazdaCX3.model}!`); // You are driving a Mazda CX-3!



