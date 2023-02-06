/* 
https://leetcode.com/problems/container-with-most-water/
*/

/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.
See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

// const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const expected1 = 49;
// // Explanation: heights1[1] and heights1[8] as container edges.
// // Length = 8 - 1. Height = 7

// const heights2 = [1, 1];
// const expected2 = 1;

// const heights3 = [4, 3, 2, 1, 4];
// const expected3 = 16;

// const heights4 = [1, 2, 1];
// const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {
  let maxArea = 0;
  for(let left = 0; left < heights.length; left++) {
    for(let right = left + 1; right < heights.length; right++) {
      let shorterHeight; 
      heights[left] < heights[right] 
        ? shorterHeight = heights[left] 
        : shorterHeight = heights[right];
      let width = right - left;
      let currArea = shorterHeight * width;
      if(currArea > maxArea) {
        maxArea = currArea;
      } 
    }
  }
  return maxArea;
}

// console.log(containerWithMostWater(heights1));
// console.log(containerWithMostWater(heights2));
// console.log(containerWithMostWater(heights3));
// console.log(containerWithMostWater(heights4));

/***********************************************************************/

// https://leetcode.com/problems/compare-version-numbers/

/* 
Given two strings, version1, and version2, both representing version numbers
If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.
Helpful methods:
  - .split(characterToSplitOn)
    - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
  - .parseInt
    - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
Bonus, solve without .split
*/

const test1V1 = "0.1";
const test1V2 = "1.1";
const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
const expected6 = 1;

/**
 * Determines which version number is greater or if they are equal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} v1
 * @param {string} v2
 * @returns {number} 1 if v1 greater, -1 if v1 smaller, 0 if equal.
 */
function compareVersionNumbers(v1, v2) {
  let version1 = [];
  let version2 = [];
  for(let i = 0; i < v1.length; i++) {
    if(v1[i] !== ".") {
      version1.push(v1[i]); 
    }
  }
  for(let i = 0; i < v2.length; i++) {
    if(v2[i] !== ".") {
      version2.push(v2[i]); 
    }
  }
  
  console.log(version1, version2)
  let shorterLength = Math.min(version2.length, version1.length);
  for(let i = 0; i < shorterLength; i++) {
    if(version1[i] === version2[i]) {
      version1.shift();
      version2.shift();
    }
  }
  
  console.log(version1, version2)

  // version1 = Number(version1.join());
  // version2 = Number(version2.join());
  // return version1 > version2
  //   ? 1
  //   : version2 > version1
  //   ? -1
  //   : 0
}

console.log(compareVersionNumbers(test1V1, test1V2));
console.log(compareVersionNumbers(test2V1, test2V2));
console.log(compareVersionNumbers(test3V1, test3V2));
console.log(compareVersionNumbers(test4V1, test4V2));
console.log(compareVersionNumbers(test5V1, test5V2));