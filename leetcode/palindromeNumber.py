# https://leetcode.com/problems/palindrome-number

#* 9. Palindrome Number

class Solution:
    def isPalindrome(self, x: int) -> bool:
        x = str(x)
        rev = str()
        for y in x:
            rev = y +rev
        return x == rev