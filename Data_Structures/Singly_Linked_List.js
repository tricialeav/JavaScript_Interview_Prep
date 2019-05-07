// https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571

// On the first instatiation, the head will be set to null and length to 0
class LinkedList {
    constructor(value) {
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }
    
    addToHead(value) {
        // When a value is passed into addToHead from LinkedList, newNode is set to the object { value: argument }
        const newNode = { value }; 
        // Then, next is added to the object, with the value being this.head
        // The first iteration will be null
        newNode.next = this.head;
        // this.head is then set to the newNode value
        this.head = newNode;
        this.length++;
        return this;
    }

    removeFromHead() {
        if (this.length === 0) {
            return undefined;
        }
            
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
            
        return this;
    }

    find(val) {
        let thisNode = this.head;
     
        while(thisNode) {
            if(thisNode.value === val) {
                return thisNode;
            }
                
            thisNode = thisNode.next;
        }
         
        return thisNode;
    }

    remove(val) {
        if(this.length === 0) {
            return undefined;
        }
        
        if (this.head.value === val) {
            this.removeFromHead();
            return this;
        }
        
        let previousNode = this.head;
        let thisNode = previousNode.next;
        
        while(thisNode) {
            if(thisNode.value === val) {
                break;
            }
            
            previousNode = thisNode;
            thisNode = thisNode.next;
        }
        
        if (thisNode === null) {
            return undefined;
        }
        
        previousNode.next = thisNode.next;
        this.length--;
        return this;
    }
}

const list = new LinkedList('first')
    .addToHead('second')
    .addToHead('third')
    .removeFromHead()

console.log(list);