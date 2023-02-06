/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
    constructor() {
    /**
     * 0th index not used, so null is a placeholder. Not using 0th index makes
     * calculating the left and right children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
    this.heap = [null];
    }

    /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
        if (parentIdx > this.heap.length - 1) {
            return;
        }
    
        spaceCnt += spaceIncr;
        this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);
    
        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${this.heap[parentIdx]} (${parentIdx})`
        );
    
        this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }

    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    top() {
        return this.heap[1];
    }

    // insert new num into heap, and maintains order
    insert(num) {
        // PUSH NEW NUM TO HEAP
        this.heap.push(num);
        // POINTERS TO CHILD/PARENT INDICES
        let childIndex = this.heap.length - 1;
        let parentIndex = Math.floor(childIndex/2);
        // CHECK TO SEE IF NEED TO SWAP
        while (this.heap[parentIndex] > this.heap[childIndex]) {
            // SWAP VALUES
            [this.heap[childIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[childIndex]];
            // UPDATE POINTER INDICES
            childIndex = parentIndex;
            parentIndex = Math.floor(childIndex/2);
        }
        return this;
    }

    /**
     * Extracts the min num from the heap and then re-orders the heap to
     * maintain order so the next min is ready to be extracted.
     * 1. Save the first node to a temp var.
     * 2. Pop last node off and overwrite idx1 with it.
     * 3. Iteratively swap the old last node that is now at idx1 with it's
     *    smallest child IF the smallest child is smaller than it.
     * - Time: O(log n) logarithmic due to shiftDown.
     * - Space: O(1) constant.
     * @returns {?number} The min number or null if empty.
     */
    extract() {
        // SWAP FIRST AND LAST ELEMENT
        // POP LAST ELEMENT AND STORE INSIDE VARIABLE

        let parentIdx = 1;
        let leftChildIdx = parentIdx * 2
        // START SHIFT DOWN LOGIC
        while(leftChildIdx < this.heap.length){
        // IS THERE A RIGHT CHILD??
        // CHECK TO SEE IF RIGHT CHILD INDEX EXISTS
        // IF BOTH LEFT AND RIGHT CHILD EXISTS
            // COMPARE THE CHILDREN VALUES, FIND THE LESSER VALUE
            // COMPARE AGAINST PARENT VALUE AND SWAP IF NECESSARY
        // IF ONLY THE LEFT CHILD EXISTS
            // COMPARE AGAINST PARENT VALUE AND SWAP IF NECESSARY
        }
        // RETURN THE MIN VARIABLE
    }

    extractMin() {
        // Check if the heap is empty
        if (this.heap.length === 0) {
            return null;  
        }
        // Store the minimum value
        const min = this.heap[0];
        // Replace the root of the heap with the last element
        this.heap[0] = this.heap.pop();
        // Re-arrange the heap to maintain the min heap property
        this.heapify(0);
        return min;
    }
    
    heapify(index) {
        // Find the left and right child of the node at the given index
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        
        let smallest = index;
        
        // If the left child is smaller than the current node, set it as the smallest
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        
        // If the right child is smaller than the current smallest, set it as the smallest
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        
        // If the smallest node is not the current node, swap them and heapify the new subtree
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            return this.heapify(smallest);
        }
        return
    }
    
}

const minHeap1 = new MinHeap();
minHeap1
    .insert(25)
    .insert(15)
    .insert(10)
    .insert(22)
    .insert(4)
    .insert(12)
    .insert(18)
    .insert(24);

minHeap1.printHorizontalTree()
console.log("~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~~>~>")

minHeap1.extractMin()
minHeap1.printHorizontalTree()
console.log("~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~~>~>")

minHeap1.extractMin()
minHeap1.printHorizontalTree()
console.log("~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~~>~>")

minHeap1.extractMin()
minHeap1.printHorizontalTree()
console.log("~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~~>~>")
