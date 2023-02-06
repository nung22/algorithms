/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.items = [];
    }
    
    /**
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) {
        this.items.push(item);
        return this.items.length;
    }
    
    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() {
        return this.items.pop();
    }
    
    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
        if(this.isEmpty()) {
            console.log("Stack is empty.");
            return;
        }
        return this.items[this.size() - 1];
    }
    
    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length > 0;
    }
    
    /**
     * Returns the size of this stack.
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

    /**
     * QUEUE MUST BE RETURNED TO IT'S ORIGINAL STATE
     * You are only allowed to use built-in methods
     * Use a stack to help solve
     * 
     * @returns {boolean} The queue is a palindrome
     */
    isPalindrome(){
        let palindrome = true;
        const tStack = new Stack();
        for(let i=0; i<this.size(); i++) {
            let temp = this.dequeue();
            tStack.push(temp);
            this.enqueue(temp);
        }
        // tStack.print();
        // this.print();
        for(let i=0; i<this.size(); i++) {
            let temp = this.dequeue();
            this.enqueue(temp);
            if(temp !== tStack.pop()) {
                palindrome = false;
            }
        }
        return palindrome;
    }

    /**
     * Determines whether the sum of the left half of the queue items is equal to
     * the sum of the right half. Avoid indexing the queue items directly via
     * bracket notation, use the queue methods instead for practice.
     * Use no extra array or objects.
     * The queue should be returned to it's original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Whether the sum of the left and right halves is equal.
     */
    isSumOfHalvesEqual() {
        let leftSum = 0;
        let rightSum = 0;
        for()
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


// let queue1 = new Queue();
// console.log(queue1.isEmpty());
// console.log(queue1.front());
// console.log("~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~~>~>")

// queue1.enqueue(25)
// queue1.enqueue(15)
// queue1.enqueue(10)
// queue1.enqueue(22)
// queue1.enqueue(4)
// queue1.enqueue(12)
// queue1.print();
// console.log("~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~~>~>")

// queue1.dequeue();
// queue1.dequeue();
// queue1.print();
// console.log("~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~~>~>")

// console.log(queue1.front());
// console.log(queue1.size());
// console.log("~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~~>~>")

// let test = new Queue()
// test.enqueue('a')
// test.enqueue('b')
// test.enqueue('c')
// test.enqueue('b')
// test.enqueue('a')
// console.log(test.isPalindrome()) // true

var q1 = Queue()

q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
q1.enqueue(3)
q1.enqueue(2)
q1.enqueue(1)

q1.isSumOfHalvesEqual() // true

var q2 = Queue()

q2.enqueue(5)
q2.enqueue(2)
q2.enqueue(1)
q2.enqueue(1)

q2.isSumOfHalvesEqual() // false


