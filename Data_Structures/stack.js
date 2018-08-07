/* A stack follows LIFO - last in first out
To accomplish this, an array will use only push() to add data
and pop() to remove it */

let stack = new Array(); 

const add = (input) => {
    stack.push(input); 
}

const remove = () => {
    stack.pop(); 
}

add(1); 
add(2); 
add(3); 
add(4); 

// stack = [1, 2, 3, 4]

remove(); 
remove(); 

//stack = [1, 2]

console.log(stack);

