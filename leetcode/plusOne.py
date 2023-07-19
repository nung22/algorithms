# https://leetcode.com/problems/plus-one

""" 
66. Plus One
"""


class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        count = 0
        j = 0
        for i in range(1, len(digits)+1):
            j = j*10
            if j ==0:
                j = 1
            count = count + digits[len(digits)-i]*j
        count = count + 1 
        digits = [int(i) for i in str(count)]

        return digits