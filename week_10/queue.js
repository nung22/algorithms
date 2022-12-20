/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.items = [];
    }
    
    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        return this.items.push(item);
    }
    
    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        if(this.isEmpty()) {
            console.log("Queue is empty.");
            return undefined;
        }
        let removedElement = this.items.shift();
        return removedElement;
    }
    
    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        if(this.isEmpty()) {
            console.log("Queue is empty.");
            return undefined;
        }
        return this.items[0];
    }
    
    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0;
    }
    
    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items);
    }
}

class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(data) {
        const newNode = new QueueNode(data);
        // DLL IS EMPTY
        if(this.head === null) {
            console.log("Linked Queue is empty");
            // POINT THE HEAD & TAIL TO THE NEW NODE
            this.head = newNode;
            this.tail = newNode
            // RETURN
            return this;
        }
        // DLL NOT EMPTY
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        return this;
    }

    dequeue() {
        // NO NODES
        if(this.head === null) {
            console.log("Linked Queue is empty");
            // RETURN
            return undefined;
        }
        // store data to be removed in a temporary variable
        let removedData = this.head.data;
        // ONE NODE
        if(this.head === this.tail) {
            this.head = this.head.next;
            this.tail = this.tail.next;
            return removedData
        }
        this.head = this.head.next;
        return removedData;
    }
}


//!==========================//
//!         TESTING          //
//!==========================//


let queue1 = new Queue();
console.log(queue1.isEmpty());
console.log(queue1.front());
console.log("~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~~>~>")

queue1.enqueue(25)
queue1.enqueue(15)
queue1.enqueue(10)
queue1.enqueue(22)
queue1.enqueue(4)
queue1.enqueue(12)
queue1.print();
console.log("~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~~>~>")

queue1.dequeue();
queue1.dequeue();
queue1.print();
console.log("~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~~>~>")

console.log(queue1.front());
console.log(queue1.size());
console.log("~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~~>~>")