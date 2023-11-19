# https://leetcode.com/problems/valid-parentheses

# * 20. Valid Parentheses

class Solution:
    def isValid(self, s: str) -> bool:
        hashMap = { ')':'(', '}':'{', ']':'[' }
        stack = []

        for c in s:
            if c not in hashMap:
                stack.append(c)
                continue
            if not stack or stack[-1] != hashMap[c]:
                return False
            stack.pop()
        
        return not stack