//* https://leetcode.com/problems/is-subsequence

/* 

392. Is Subsequence


Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting 
some (can be none) of the characters without disturbing the relative positions of the remaining 
characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false


Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.


Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want 
to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let j = 0; // For index of str1 (or subsequence

  // Traverse str2 and str1, and
  // compare current character
  // of str2 with first unmatched char
  // of str1, if matched
  // then move ahead in str1
  for (let i = 0; i < t.length && j < s.length; i++) {
      if (s[j] == t[i]) {
          j++;
      }
  }
  // If all characters of str1 were found in str2
  return (j == s.length);
};