/* const and let are keywords introduced in ES6 to replace the use of var.
 const binds itself to a value, and the binding cannot be changed. 
 This does NOT mean that the bound values cannot be changed, however, and should 
 not be thought of as a way to provide for immutibility. 
 
 let is more similar to var in the sense that its binding can be altered after it 
 has been declared. However, the primary difference between let and var has to do
 with hoisting. var can still be accessed outside of it's block scope and 
 within the function scope, whereas let cannot be accessed outside of block scope
 (neither can be accessed outside of function scope) */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

array = 10; // This will produce an assignment (binding) error

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const changeConstArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 1;
    }
    console.log(arr);
}

changeConstArray(array2); // will return [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]

const varExample = () => {
    for (var i = 0; i < 10; i++) {  
        var hoisted = i + i;   
    }
    console.log(hoisted); 
}

varExample(); // returns 18

const letExample = () => {
    for (let i = 0; i < 10; i++) {
        let noHoist = i++;  
    }
    console.log(noHoist); 
}

letExample(); // returns reference error (noHoist is not defined)

