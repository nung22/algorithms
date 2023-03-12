const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n^2) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */

const insertionSort = (nums) => {
  // iterate through each element of the array nums
  for(let i = 1; i < nums.length; i++) {
    // sort if the element at 'i' is less than its left element
    if(nums[i] < nums[i - 1]) {
      // element to sort
      let currElement = nums[i];
      // final index of sorted element
      let j = i;
      // iterate through sorted portion of nums as long as the 
      // current element is less than the element to its left
      while(currElement < nums[j - 1]) {
        // move left element forward one position
        nums[j] = nums[j - 1];
        // move index of current element back one position
        j--;
      }
      // move current element to its correct position
      nums[j] = currElement;
    }
  }
  return nums;
}

console.log(insertionSort(numsOrdered));
console.log(insertionSort(numsRandomOrder));
console.log(insertionSort(numsReversed));