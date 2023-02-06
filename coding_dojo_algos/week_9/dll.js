/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/
class DLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        // TODO: implement the constructor.
        this.head = null;
        this.tail = null;
    }
    //!  MONDAY -------------------------------------------------------------------//
    printForward() {
        // DLL IS EMPTY
        if(this.head === null && this.tail === null){
            console.log("DLL IS EMPTY");
        }
        // DLL IS NOT EMPTY
        let runner = this.head;
        while(runner != null){
            console.log(runner.value);
            runner = runner.next;
        }
        console.log("~>~>~>~>~>~>~>~>~>~>~>~>~>~>");
    }
    printReverse() {
        // DLL IS EMPTY
        if(this.head === null && this.tail === null){
            console.log("DLL IS EMPTY");
        }
        // DLL IS NOT EMPTY
        let runner = this.head;
        while(runner.next != null){
            runner = runner.next;
        }
        while(runner != null){
            console.log(runner.value);
            runner = runner.prev;
        }
        console.log("~>~>~>~>~>~>~>~>~>~>~>~>~>~>")
    }
    /**
     * Creates a new node and adds it at the front of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtFront(data) {
        // CREATE A NEW NODE WITH THE GIVEN DATA
        let newNode = new SLNode(data);
        // DLL IS EMPTY
        if(this.head === null && this.tail === null) {
            console.log("DLL is empty");
            // POINT THE HEAD & TAIL TO THE NEW NODE
            this.head = newNode;
            this.tail = newNode
            // RETURN
            return;
        }
        // DLL NOT EMPTY
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        console.log("Inserting ${data} at front.");
        return;
    }
    
    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {
        // CREATE A NEW NODE WITH THE GIVEN DATA
        let newNode = new SLNode(data);
        // DLL IS EMPTY
        if(this.tail === null) {
            console.log("DLL is empty");
            // POINT THE HEAD TO THE NEW NODE
            this.head = newNode;
            // RETURN
            return;
        }
        // DLL NOT EMPTY
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        return;
    }

    //!  TUESDAY -------------------------------------------------------------------//

    /**
     * Adds each item of the given array to the back of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    seedFromArr(vals) {
        for(let i = 0; i < vals.length; i++) {
            this.insertAtBack(vals[i])
        }
        return
    }

    //! WEDNESDAY -------------------------------------------------------------------//

    /**
     * Creates a new node with the given data and inserts that node at the front
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtFront(data) {
        // DLL IS EMPTY
        // CREATE A NEW NODE WITH THE GIVEN DATA
        let NewNode = new SLNode(data)
        if(this.head === null && this.tail === null){
            console.log("DLL IS EMPTY")
            // POINT THE HEAD TO THE NEW NODE
            this.head = NewNode
            // RETURN
            return 
        }
        // DLL IS NOT EMPTY
        NewNode.next = this.head;
        this.head = NewNode;
        return
    }

    /**
     * Removes the first node of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data from the removed node.
     */
    removeAtFront() {
        if(this.head == null){
            console.log("DLL IS EMPTY")
            // RETURN
            return null
        }
        let tempNode = this.head;
        this.head = this.head.next;
        // console.log(tempNode.value)
        return tempNode.value;
    }

    // EXTRA
    /**
     * Calculates the average of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {number|NaN} The average of the node's data.
     */
    average() {
        // DLL IS EMPTY
        if(this.head === null && this.tail === null){
            console.log("DLL IS EMPTY")
            return 
        }
        // DLL IS NOT EMPTY
        // CREATE A RUNNER AT THE HEAD
        let runner = this.head;
        // CREATE VALUES TO TRACK SUM AND COUNT
        let sum = 0;
        let count = 0;
        // READ THE RUNNER UNTIL IT GETS TO THE LAST NODE
        while(runner != null) {
            count ++;
            sum += runner.value;
            runner = runner.next
        }
        // console.log("Sum:",sum)
        // console.log("Count:",count)
        return sum / count;
    }
    //! THURSDAY --------------------------------------------------------------------//

    /**
     * Removes the last node of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data from the node that was removed.
     */
    removeBack() {
        // DLL IS EMPTY
        if(this.head == null){
            console.log("DLL IS EMPTY")
            // RETURN
            return null
        }
        // DLL HAS ONE NODE
        else if(this.head.next == null){
            console.log("DLL HAS ONE NODE")
            // RETURN
            let temp = this.head
            this.head = null
            console.log(temp.value)
            return temp.value
        }
        // DLL IS NOT EMPTY
        else {
            // RETURN
            let runner = this.head
            while(runner.next.next != null) {
                runner = runner.next
            }
            let temp = runner.next
            runner.next = null
            console.log(temp.value)
            return temp.value
        }
    }
    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains(target) {
        // DLL IS EMPTY
        if(this.head === null && this.tail === null){
            return false
        }
        // CREATE A RUNNER AT THE HEAD
        let runner = this.head
        // HAVE THE RUNNER GO THROUGH THE DLL
        while(runner != null) {
            // CHECK TO SEE IF THE RUNNER VALUE MATCHES THE TARGET
            if(runner.value == target) {
                // RETURN TRUE IF THE VALUE MATCHES THE TARGET
                return true
            }
            // GO TO THE NEXT NODE
            runner = runner.next;
        }
        // RETURN FALSE IF THE RUNNER GOES OUT OF BOUNDS
        return false
    }
    // EXTRA
    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?node} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
     */
    containsRecursive(val, current = this.head) {
        if(current == null) {
            return false
        }
        if(current.value == val) {
            // console.log("Success")
            return true
        }
        return this.containsRecursive(val, current.next)
    }
    //! FRIDAY ----------------------------------------------------------------------//

    /**
     * Removes the node that has the matching given val as it's data.
     * - Time: (?).
     * - Space: (?).
     * @param {any} val The value to compare to the node's data to find the
     *    node to be removed.
     * @returns {boolean} Indicates if a node was removed or not.
     */
    removeVal(val) {
        // LIST IS EMPTY
        if(this.head === null && this.tail === null){
            return false
        }
        // HEAD CONTAINS THE TARGET VALUE
        else if(this.head.value == val){
            this.head = this.head.next
            return true
        }
        // LIST HAS MANY NODES
        // CREATE A RUNNER AT THE HEAD
        let runner = this.head
        // RUN THROUGH THE DLL
        while(runner.next != null) {
            // CHECK FOR THE RUNNERS NEXT VALUE
            if(runner.next.value == val) {
            // IF THE VALUE IS FOUND
                // CREATE A TEMP VARIABLE POINTING TO THE RUNNERS NEXT NODE
                let temp = runner.next
                // POINT THE RUNNER POINT AND SKIP TO THE NEXT NEXT NODE
                runner.next = runner.next.next
                // USING THE temp VARIABLE, POINT THE NEXT TO NULL
                temp = null
                // RETURN true
                return true
            }
            // GO TO THE NEXT NODE
            runner = runner.next;
        }
        // RETURN false
        return false
    }

    /**
     * Retrieves the data of the second to last node in this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data of the second to last node or null if there is no
     *    second to last node.
     */
    secondToLast() {
        // LIST IS EMPTY
        if(this.head === null && this.tail === null || this.head.next == null){
            // RETURN
            return null
        }
        let runner = this.head
        while(runner.next.next != null) {
            runner = runner.next;
        }
        return runner.value;
    }

    //  FRIDAY EXTRA
    /**
     * Retrieves the data of the kth to last node in this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data of the kth to last node or null if there is no
     *    kth to last node.
     */
    kthToLast(k) {

    }

}


//!==========================//
//!         TESTING          //
//!==========================//


let dll = new DoublyLinkedList();

// console.log("=========== Insert At Back Test ===========")
// dll.insertAtBack(1)
// dll.insertAtBack(2)
// dll.insertAtBack(3)
// dll.insertAtBack(4)
// dll.insertAtBack(5)
// dll.printValues()

// console.log("=========== Seed From Array Test ===========")
// dll.seedFromArr([1,2,3,4,5,6])
// dll.printValues()

// console.log("=========== Remove at Back Test ===========")
// dll.seedFromArr([1,2,3,4,5,6])
// dll.removeBack()
// dll.removeBack()
// dll.printValues()

// console.log("=========== Contains & Contains Recursive Test ===========")
// dll.seedFromArr([1,2,3,4,5,6])
// console.log(dll.contains(4));
// console.log(dll.contains(7));
// console.log(dll.containsRecursive(4));
// console.log(dll.containsRecursive(7));

// console.log("=========== Insert At Front Test ===========")\
// dll.seedFromArr([1,2,3,4,5,6])
// dll.insertAtFront(10)
// dll.printValues()

dll.removeVal(4)
// dll.removeAtFront()
dll.printForward()
console.log(dll.secondToLast());
// console.log(dll.average())