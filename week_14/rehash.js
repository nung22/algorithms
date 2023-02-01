/* 
Given by Riot games.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
  const resultObj = {};
  s.split("").forEach( char => {
    if(isNaN(char)) {
      resultObj[char] = 0;
    }
  })
  for(let i = 0; i < s.length; i++) {
    if(resultObj.hasOwnProperty(s[i])) {
      const letter = s[i];
      let numStr = "";
      i++
      while(!isNaN(s[i])) {
        numStr += s[i]
        i++;
      }
      resultObj[letter] += Number(numStr);
      i--;
    }
  }

  let result = "";
  Object.keys(resultObj).sort().forEach( key => {
    result += key + resultObj[key];
  })
  return result;
}

console.log(rehash(str1))

// ==================================================================

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

// const str1 = "abcabcbb";
// const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
function lengthOfLongestSubString(str) {}