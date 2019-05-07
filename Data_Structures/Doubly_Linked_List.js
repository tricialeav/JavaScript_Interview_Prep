/* Linked lists use connected nodes to store, retrieve, delete data 
Each individual node points to the next, and in the case of a doubly linked list, 
will point to the previous as well 
Linked lists are slower to search, but can be quick when adding or deleting the
first/last item 

Average access time complexity: Θ(n) 
Average search time complexity: Θ(n)
Average insertion/deletion time complexity: O(1)
Space Complexity (Worst): O(n)

Code from:
https://hackernoon.com/the-little-guide-of-linked-list-in-javascript-9daf89b63b54
https://github.com/germancutraro/LinkedList-Data-Structure
*/

class LinkedList {
    constructor() {
    this.head = null;
    this.tail = null;
    }
}
class Node {
    constructor (value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
    }
}

// -------- INSERT HEAD -------- //

// Create a new prototypal instatiation for LinkedList function
LinkedList.prototype.addToHead = function (value) {
    // Create a new instance of the Node function
    const newNode = new Node(value, this.head, null);
    // If the LinkedList constructor has a head (at least one item has been inserted), then set the prev head to newNode
    if (this.head) this.head.prev = newNode;
    // If the LinkedList doed not already have a head (no items have been inserted) set both the head and the tail to new Node
    else this.tail = newNode;
    this.head = newNode;
};

// -------- INSERT TAIL -------- //

LinkedList.prototype.addToTail = function (value) {
    const newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
}

// -------- REMOVE HEAD -------- //

LinkedList.prototype.removeHead = function () {
    if (!this.head) return null;
    let value = this.head.value;
    this.head = this.head.next;

    if (this.head) this.head.prev = null;
    else this.tail = null;

    return value;
}

// -------- REMOVE TAIL -------- //

LinkedList.prototype.removeTail = function () {
    if (!this.tail) return null;
    let value = this.tail.value;
    this.tail = this.tail.prev;

    if (this.tail) this.tail.next = null;
    else this.head = null;

    return value;
}

// -------- SEARCH BY HEAD-------- //

LinkedList.prototype.searchHead = function (searchValue) {
    let currentNode = this.head;

    while (currentNode) {
        if (currentNode.value === searchValue) return currentNode;
        currentNode = currentNode.next;
    }
    return null;
}

// -------- SEARCH BY HEAD-------- //

LinkedList.prototype.searchTail = function (searchValue) {
    let currentNode = this.tail;

    while (currentNode) {
        if (currentNode.value === searchValue) return currentNode;
        currentNode = currentNode.prev;
    }
    return null;
}

const list1 = new LinkedList();
list1.addToHead(100);
list1.addToHead(200);
list1.addToHead(300);
console.log(list1);

const list2 = new LinkedList();
list2.addToTail(100);
list2.addToTail(200);
list2.addToTail(300);
console.log(list2);

const arr = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const list3 = new LinkedList(); 
for (let i = 0; i < arr.length; i++) {
    list3.addToHead(arr[i]);
}
console.log(list3);


console.log(list1.searchHead(200));
console.log(list3.searchTail(500));



