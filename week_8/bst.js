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
}


// TEST CASES
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

// console.log("============= MIN & MAX TEST =============");
// console.log(threeLevelTree.min())

console.log("============= Contains Test =============");
console.log(threeLevelTree.contains(13));
console.log(twoLevelTree.contains(13));
console.log(emptyTree.contains(13));
console.log(threeLevelTree.containsRecursive(10));
console.log(twoLevelTree.containsRecursive(13));
console.log(emptyTree.containsRecursive(13));
threeLevelTree.print()