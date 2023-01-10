/* 
  https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/
  Stable
  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
  Space: O(1) constant.
  For review, create a function that uses SelectionSort to sort an unsorted array in-place.
  Find the minimum element in the array, then swap with the element in the first position and continue until array is fully sorted
*/

// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n^2) quadratic when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
const selectionSort = (nums = []) => {
  // iterate through the array nums where 'i' is the index
  // of the minimum value in the unsorted portion of nums
  for(let i = 0; i < nums.length; i++) {
    // iterate through unsorted portion of nums starting at
    // the element to the right of the minimum value
    for(let j = i + 1; j < nums.length; j++) {
      // if an element in the unsorted array is less than
      // the minimum value, swap the two elements
      if(nums[j] < nums[i]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums; // return sorted array
}

// console.log(selectionSort(numsOrdered));
// console.log(selectionSort(numsRandomOrder));
// console.log(selectionSort(numsReversed));

module.exports = selectionSort;