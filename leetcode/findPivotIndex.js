//* https://leetcode.com/problems/find-pivot-index

/*

724. Find Pivot Index

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0,
      rightSum = 0;
    for (let j = i; j >= 0; j--) {
      leftSum += nums[j];
    }
    for (let j = i; j < nums.length; j++) {
      rightSum += nums[j];
    }
    console.log(rightSum);
    console.log(leftSum);
    if (rightSum === leftSum) {
      return i;
    }
  }
  return -1;
};
