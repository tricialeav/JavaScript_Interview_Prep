/* Reverse the order of a string without using the array.reverse() method */

const reverse = (string) => {
    let array = string.split(''); 
    let reverseArray = []; 
    for (let i = array.length - 1; i >= 0; i --) {
        reverseArray.push(array[i]); 
    }
    let output = reverseArray.join('');
    console.log(output); 
}

reverse("This is a string"); // gnirts a si sihT