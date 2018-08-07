/* Linked lists use connected nodes to store, retrieve, delete data 
Each individual node points to the next, and in the case of a doubly linked list, 
will point to the previous as well 
Linked lists are slower to search, but can be quick when adding or deleting the
first/last item 

Average access time complexity: Θ(n) 
Average search time complexity: Θ(n)
Average insertion/deletion time complexity: O(1)
Space Complexity (Worst): O(n)

https://hackernoon.com/the-little-guide-of-linked-list-in-javascript-9daf89b63b54
https://github.com/germancutraro/LinkedList-Data-Structure
*/

function LinkedList() {
    this.head = null;
    this.tail = null;
}
function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead = function (value) {
    const newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
    const newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
}

LinkedList.prototype.removeHead = function () {
    if (!this.head) return null;
    let value = this.head.value;
    this.head = this.head.next;

    if (this.head) this.head.prev = null;
    else this.tail = null;

    return value;
}

LinkedList.prototype.removeTail = function () {
    if (!this.tail) return null;
    let value = this.tail.value;
    this.tail = this.tail.prev;

    if (this.tail) this.tail.next = null;
    else this.head = null;

    return value;
}

LinkedList.prototype.search = function (searchValue) {
    let currentNode = this.head;

    while (currentNode) {
        if (currentNode.value === searchValue) return currentNode;
        currentNode = currentNode.next;
    }
    return null;
}

const list = new LinkedList();
list.addToHead(100);
list.addToHead(200);
console.log(list);

const list = new LinkedList();
list.addToTail(100);
list.addToTail(200);
list.addToTail(300);
console.log(list);



