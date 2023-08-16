# https://leetcode.com/problems/missing-number

#* 268. Missing Number

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        # initialize missing_num to n
        missing_num = len(nums)
        
        # loop through the array nums
        for i, num in enumerate(nums):
            # perform XOR operation with index and element
            missing_num ^= i ^ num
        
        # return the missing number
        return missing_num