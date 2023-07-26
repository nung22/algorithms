# https://leetcode.com/problems/remove-duplicates-from-sorted-array


#* 26. Remove Duplicates from Sorted Array


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i,j = 0,1
        while i <= j and j < len(nums):
            if nums[i] == nums[j]:
                j += 1
            else:
                nums[i+1] = nums[j]
                i += 1
        return i + 1