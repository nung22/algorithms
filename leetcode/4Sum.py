# https://leetcode.com/problems/4sum

#* 18. 4Sum

class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        n = len(nums)
        nums.sort()
        res = []

        for i in range(n-3):
            # avoid the duplicates while moving i
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            for j in range(i+1, n-2):
                # avoid the duplicates while moving j
                if j > i + 1 and nums[j] == nums[j - 1]:
                    continue
                lo = j + 1
                hi = n - 1
                while lo < hi:
                    temp = nums[i] + nums[j] + nums[lo] + nums[hi]
                    if temp == target:
                        res += [nums[i], nums[j], nums[lo], nums[hi]],

                        # skip duplicates
                        while lo < hi and nums[lo] == nums[lo + 1]:
                            lo += 1
                        lo += 1
                        while lo < hi and nums[hi] == nums[hi - 1]:
                            hi -= 1
                        hi -= 1
                    elif temp < target:
                        lo += 1
                    else:
                        hi -= 1
        return res