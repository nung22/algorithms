/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * Class to represent Binary Search Tree (BST).
 */
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() { 
        return this.root === null;
    }

        /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    min(current = this.root) { 
        // BST IS EMPTY
        if(this.isEmpty()){
            return null;
        }
        // BST IS NOT EMPTY
        let runner = current;
        while(runner.left != null){
            runner = runner.left
        }
        return runner.data
    }

    minRecursive(current = this.root) {
        // BST IS EMPTY
        if(this.isEmpty()){
            return null;
        }
        // BASE CASE
        if(current.left === null){
            return current.data
        }
        // FORWARD PROGRESS
        // Recursive call
        return this.minRecursive(current.left)
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) { 
        // BST IS EMPTY
        if(this.isEmpty()){
            return null
        }
        // BST IS NOT EMPTY
        let runner = current
        while(runner.right !== null){
            runner = runner.right
        }
        return runner.data
    }
    maxRecursive(current = this.root) { 
        // BST IS EMPTY
        if(this.isEmpty()){
            return null;
        }
        // BST IS NOT EMPTY
        if(current.right === null){
            return current.data
        }
        // FORWARD PROGRESS
        // Recursive call
        return this.minRecursive(current.right)
    }

    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }

    /**
     * Checks if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    contains(searchVal) { 
        // BST IS EMPTY
        if(this.isEmpty()){
            return null
        }
        // BST IS NOT EMPTY
        let current = this.root
        while(current !== null){
            if(current.data === searchVal) {
                return true
            }
            if(current.right !== null && current.right.data > searchVal) {
                current = current.right
            }
            if(current.left !== null && current.left.data < searchVal) {
                current = current.left
            }
        }
        return false
    }
    containsRecursive(searchVal, current = this.root) { 
        // BST IS EMPTY
        if(this.isEmpty()) {
            return null;
        }
        if(current.data === searchVal) {
            return true;
        }
        // VALUE IS GREATER THAN CURRENT NODE
        if(current.right !== null && current.right.data >= searchVal) {
            // Recursive call
            return this.containsRecursive(searchVal, current.right)
        }
        // VALUE IS LESS THAN CURRENT NODE
        if(current.left !== null && current.left.data <= searchVal) {
            // Recursive call
            return this.containsRecursive(searchVal, current.left)
        }
        // VALUE NOT FOUND
        return false
    }

    /**
     * Insert a new node with the given newVal in the right place to preserve the BST
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {BinarySearchTree} this tree.
     */
    insert(newVal) { 
        // CREATE A NEW BST NODE
        let newNode = new BSTNode(newVal)
        // BST IS EMPTY
        if(this.isEmpty()) {
            // POINT ROOT TO NEW BST NODE
            this.root = newNode
            // RETURN THIS
            return this
        }
        //BST IS NOT EMPTY
        // SET CURRENT AT THE ROOT
        let curr = this.root
        // COMPARE THE newValue TO current DATA
        while(curr !== null) {
            // CHECK TO SEE IF THE runner LEFT or RIGHT POINTS TO ANOTHER NODE
                // IF LEFT or RIGHT points to NULL
                // POINT THE runner LEFT or RIGHT to the NEW BST NODE
            if(newVal < curr.data) {
                if (curr.left === null) {
                    curr.left = newNode
                    return this
                }
                curr = curr.left
            } else {
                if (curr.right === null) {
                    curr.right = newNode
                    return this
                }
                else if (newVal === curr.data) {
                    console.log(newVal,"is already in the BST.")
                    return this
                }
                curr = curr.right
            }
        }
        return this
    }
    insertRecursive(newVal, curr = this.root) {
        // CREATE A NEW BST NODE
        let newNode = new BSTNode(newVal)
        // BST IS EMPTY
        if(this.isEmpty()) {
            curr = newNode
            return this
        }
        // BST IS NOT EMPTY
        // newVal IS LESS THAN VALUE OF CURRENT NODE
        if(newVal < curr.data) {
            if (curr.left === null) {
                curr.left = newNode
                return this
            }
            // Recursive call
            return this.insertRecursive(newVal, curr.left)
        } 
        // newVal IS ALREADY PRESENT IN BST
        else if (newVal === curr.data) {
            console.log(newVal,"is already in the BST.")
            return this
        }
        // newVal IS GREATER THAN VALUE OF CURRENT NODE
        if (curr.right === null) {
            curr.right = newNode
            return this
        }
        // Recursive call
        return this.insertRecursive(newVal, curr.right)
    }
    toArrInorder(node = this.root, vals = []) {
        if(node !== null) {
            // Recursive call to left
            this.toArrInorder(node.left, vals)
            // Add node data to array
            vals.push(node.data)
            // Recursive call to right
            this.toArrInorder(node.right, vals)
        }
        return vals
    }

    /**
     * Recursively counts the total number of nodes in this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during the traversal of this tree.
     * @returns {number} The total number of nodes.
     */
    size(node = this.root) {
        if(node === null) {
            return null
        }
        return 1 + this.size(node.left) + this.size(node.right)
    }
    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree.
     */
    height(node = this.root) {
        if(node === null) {
            return null
        }
        let left =  this.height(node.left)
        let right = this.height(node.right)
        if( left > right){
            return 1 + left
        }
        return 1 + right
    }
    /**
     * Determine whether the BST is balanced, for a BST to be balanced,
     * a Node's left and right height must have a max difference of 1 AND
     * all Nodes in the tree must be balanced as well.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree.
     */
    isBalanced(node = this.root) {
        if(node === null) {
            return true
        }
        let left = this.height(node.left)
        let right = this.height(node.right)
        if(Math.abs(left - right) <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right)) {
            return true 
        }
        return false
    }
        /**
     * BFS order: horizontal rows top-down left-to-right.
     * Converts this BST into an array following Breadth First Search order.
     * Example on the fullTree var:
     * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
     * @param {Node} current The current node during the traversal of this tree.
     * @returns {Array<number>} The data of all nodes in BFS order.
     */
    toArrLevelOrder(current = this.root) {
        const queue = []
        const vals = []

        if(node === null) {
            return [];
        }
        // shift - it removes / returns the first element in the array
        // const removedElement = queue.shift()
    
        // if current exists
            // add the the curent node to the queue
        
        while(queue.length > 0){
            // remove the first element in the queue
            // PUSH TO vals THE BST NODE'S VALUE
    
            // IF REMOVED NODE'S LEFT EXISTS
            // PUSH TO queue THE LEFT OF THE NODE
            // IF REMOVED NODDE'S RIGHT EXISTS
            // PUSH TO queue THE RIGHT OF THE NODE
        }
        // RETURN vals
    }
}

// TEST CASES
// Empty & oneLevelTree
const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
            
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
        root
        10

    5     15

2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
const fullTree = new BinarySearchTree();
fullTree
    .insert(25)
    .insert(15)
    .insert(10)
    .insert(22)
    .insert(4)
    .insert(12)
    .insert(18)
    .insert(24)
    .insert(50)
    .insert(35)
    .insert(70)
    // .insert(31)
    // .insert(44)
    // .insert(66)
    .insert(90);


// console.log("============= MIN & MAX TEST =============");
// console.log(threeLevelTree.min())

// console.log("============= Contains Test =============");
// console.log(threeLevelTree.contains(13));
// console.log(twoLevelTree.contains(13));
// console.log(emptyTree.contains(13));
// console.log(threeLevelTree.containsRecursive(10));
// console.log(twoLevelTree.containsRecursive(13));
// console.log(emptyTree.containsRecursive(13));
// threeLevelTree.print()

// console.log("============= Insert Test =============");
// fullTree.print()
// fullTree.insert(3)
// fullTree.insert(10)
// fullTree.insertRecursive(91)
// fullTree.insertRecursive(65)
// fullTree.insertRecursive(64)
// fullTree.insertRecursive(10)
// fullTree.print()

console.log("============= Array In Order Test =============");
fullTree.print()
// vals = [];
// console.log(fullTree.toArrInorder())

console.log("============= Size, Height Test =============");
fullTree.print()
console.log(fullTree.size());
console.log(fullTree.height());
console.log(fullTree.isBalanced());
