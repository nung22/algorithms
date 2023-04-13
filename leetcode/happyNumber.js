//* https://leetcode.com/problems/happy-number

/* 

202. Happy Number

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.


Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Example 2:

Input: n = 2
Output: false


Constraints:

1 <= n <= 231 - 1

*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let used = new Set();

while(n>0)
{
  let tmp = 0;
  while(n>0){
    let i = n%10;
    tmp += i*i;
    n = Math.floor(n/10);
  }

  if(used.has(tmp)){
    return false;
  }
  else{
    used.add(tmp);    
  }
  

  if(tmp==1){
    return true;
  }

  n = tmp;

}

return false; 
};