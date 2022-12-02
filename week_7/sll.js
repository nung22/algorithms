// MON

/* 
Intro to Singly Linked Lists
    - OOP
    - Array VS SLL
*/
class SLNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}



class SLL {
    constructor() {
        this.head = null;
    }
    //!  MONDAY -------------------------------------------------------------------//
    /**
     * Prints all the nodes in the list to the console.
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {SinglyLinkedList} This list.
     */
    isEmpty(){
        if(this.head == null){
            return true
        }
        return false
    }
    printValues() {
        // SLL IS EMPTY
        if(this.isEmpty()){
            console.log("SLL IS EMPTY")
        }
        // SLL IS NOT EMPTY
        let runner = this.head
        while(runner != null){
            console.log(runner.value)
            runner = runner.next
        }
        console.log("~~~~~~~~~~")
    }


    //!  TUESDAY -------------------------------------------------------------------//
    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBack(data) {
        // CREATE A NEW NODE WITH THE GIVEN DATA
        let newNode = new SLNode(data)
        // SLL IS EMPTY
        if(this.isEmpty()) {
            console.log("SLL is empty")
            // POINT THE HEAD TO THE NEW NODE
            this.head = newNode
            // RETURN
            return
        }
        // SLL NOT EMPTY
        // CREATE A RUNNER AT THE HEAD
        let runner = this.head;
        // READ THE RUNNER UNTIL IT GETS TO THE LAST NODE
        while(runner.next != null) {
            // console.log(runner.value)
            runner = runner.next
        }
        // POINT THE RUNNER"S NEXT TO THE NEW NODE
        runner.next = newNode
        return
    }

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
        // SLL IS EMPTY
        // CREATE A NEW NODE WITH THE GIVEN DATA
        let NewNode = new SLNode(data)
        if(this.isEmpty()){
            console.log("SLL IS EMPTY")
            // POINT THE HEAD TO THE NEW NODE
            this.head = NewNode
            // RETURN
            return 
        }
        // SLL IS NOT EMPTY
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
            console.log("SLL IS EMPTY")
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
        // SLL IS EMPTY
        if(this.isEmpty()){
            console.log("SLL IS EMPTY")
            return 
        }
        // SLL IS NOT EMPTY
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
        // SLL IS EMPTY
        if(this.head == null){
            console.log("SLL IS EMPTY")
            // RETURN
            return null
        }
        // SLL HAS ONE NODE
        else if(this.head.next == null){
            console.log("SLL HAS ONE NODE")
            // RETURN
            let temp = this.head
            this.head = null
            console.log(temp.value)
            return temp.value
        }
        // SLL IS NOT EMPTY
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
        // SLL IS EMPTY
        if(this.isEmpty()){
            return false
        }
        // CREATE A RUNNER AT THE HEAD
        let runner = this.head
        // HAVE THE RUNNER GO THROUGH THE SLL
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
        if(this.isEmpty()){
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
        // RUN THROUGH THE SLL
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
        if(this.isEmpty() || this.head.next == null){
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





//==========================//
//         TESTING          //
//==========================//


let sll = new SLL();

// console.log("=========== Insert At Back Test ===========")
// sll.insertAtBack(1)
// sll.insertAtBack(2)
// sll.insertAtBack(3)
// sll.insertAtBack(4)
// sll.insertAtBack(5)
// sll.printValues()

// console.log("=========== Seed From Array Test ===========")
// sll.seedFromArr([1,2,3,4,5,6])
// sll.printValues()

// console.log("=========== Remove at Back Test ===========")
// sll.seedFromArr([1,2,3,4,5,6])
// sll.removeBack()
// sll.removeBack()
// sll.printValues()

// console.log("=========== Contains & Contains Recursive Test ===========")
// sll.seedFromArr([1,2,3,4,5,6])
// console.log(sll.contains(4));
// console.log(sll.contains(7));
// console.log(sll.containsRecursive(4));
// console.log(sll.containsRecursive(7));

// console.log("=========== Insert At Front Test ===========")\
// sll.seedFromArr([1,2,3,4,5,6])
// sll.insertAtFront(10)
// sll.printValues()

sll.removeVal(4)
// sll.removeAtFront()
sll.printValues()
console.log(sll.secondToLast());
// console.log(sll.average())

// let slnode = new SLNode("a")
// let runner = slnode
// slnode.value = "b"
// console.log(runner)

// let newSLL = new SLL()

// let slNode1 = new SLNode('a')
// let slNode2 = new SLNode('b')
// newSLL.head = slNode1
// slNode1.next = slNode2