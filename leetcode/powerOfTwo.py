# https://leetcode.com/problems/power-of-two

#* 231. Power of Two

class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        while n > 1:
            n /= 2
        return n == 1