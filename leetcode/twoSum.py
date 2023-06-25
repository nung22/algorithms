# https://leetcode.com/problems/two-sum

#* 1. Two Sum

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        res = []
        for i,num in enumerate(nums):
            if abs(target - num) >= 0:
                j = i + 1
                while j < len(nums):
                    if num + nums[j] == target:
                        return [i,j]
                    j += 1