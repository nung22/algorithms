//* https://leetcode.com/problems/isomorphic-strings

/* 

205. Isomorphic Strings


Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.


Example 1:

Input: s = "egg", t = "add"
Output: true

Example 2:

Input: s = "foo", t = "bar"
Output: false

Example 3:

Input: s = "paper", t = "title"
Output: true


Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.

 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const strDict1 = new Map(), strDict2 = new Map();
  for(let i = 0; i<s.length; i++) {
      if(!strDict1.has(s[i])){
          strDict1.set(s[i], t[i]);
      }
      if(strDict1.get(s[i]) !== t[i]) {
          return false;
      }
      if(!strDict2.has(t[i])){
          strDict2.set(t[i], s[i]);
      }
      if(strDict2.get(t[i]) !== s[i]) {
          return false;
      }
  }
  return true;
};