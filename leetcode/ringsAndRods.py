# https://leetcode.com/problems/3sum-closest

# * 2103. Rings and Rods

class Solution:
    def countPoints(self, r: str) -> int:
        ans = 0
        for i in range(10):
            i = str(i)
            if 'R'+i in r and 'G'+i in r and 'B'+i in r:
                ans += 1
        return ans